const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;

    if (!title || !description || !date || !location) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const event = await Event.create({
      title,
      description,
      date,
      location,
      organizerId: req.user.userId, // 🔑 ownership
    });

    res.status(201).json({
      message: 'Event created successfully',
      eventId: event._id,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({ status: 'upcoming' })
      .sort({ date: 1 })
      .populate('organizerId', 'name');

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate('organizerId', 'name');

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.getMyEvents = async (req, res) => {
  try {
    const events = await Event.find({
      organizerId: req.user.userId,
    }).sort({ date: -1 });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(re.params.id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // 🔐 OWNERSHIP CHECK
    if (event.organizerId.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    event.title = req.body.title || event.title;
    event.description = req.body.description || event.description;
    event.date = req.body.date || event.date;
    event.location = req.body.location || event.location;

    await event.save();

    res.status(200).json({ message: 'Event updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.softDeleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event || event.isDeleted) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // 🔐 ownership check
    if (event.organizerId.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    event.isDeleted = true;
    event.status = 'cancelled';

    await event.save();

    res.status(200).json({
      message: 'Event soft deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.hardDeleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // 🔐 OWNERSHIP CHECK
    if (event.organizerId.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await event.deleteOne();

    res.status(200).json({
      message: 'Event permanently deleted',
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateEventStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!['upcoming', 'past', 'cancelled'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const event = await Event.findById(req.params.id);

    if (!event || event.isDeleted) {
      return res.status(404).json({ message: 'Event not found' });
    }

    // 🔐 ownership check
    if (event.organizerId.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    event.status = status;
    await event.save();

    res.status(200).json({
      message: 'Event status updated successfully',
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
