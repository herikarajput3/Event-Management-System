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
