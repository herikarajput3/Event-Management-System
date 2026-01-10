const Event = require('../models/Event');
const Registration = require('../models/Registration');

exports.registerForEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const userId = req.user.userId;

        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        const count = await Registration.countDocuments({ eventId });

        if (count >= event.capacity) {
            return res.status(400).json({
                message: 'Event is full'
            });
        }

        // 🚫 organizer cannot register own event
        if (event.organizerId.toString() === userId) {
            return res.status(400).json({ message: 'Organizer cannot register for own event' });
        }

        const registration = await Registration.create({
            userId,
            eventId,
        });

        res.status(201).json({
            message: 'Successfully registered for event',
            registrationId: registration._id,
        });
    } catch (error) {
        // duplicate registration case
        if (error.code === 11000) {
            return res.status(409).json({ message: 'Already registered' });
        }

        res.status(500).json({ message: 'Server error' });
    }
};

