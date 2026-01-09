const express = require('express');
const router = express.Router();

const { createEvent, getAllEvents, updateEvent, deleteEvent, getEventById } = require('../controllers/eventController');
const { protect } = require('../middlewares/authMiddleware');
const { organizerOnly } = require('../middlewares/roleMiddleware');

router.post('/', protect, organizerOnly, createEvent);
router.get('/', getAllEvents);
router.put('/:id', protect, organizerOnly, updateEvent);
router.delete('/:id', protect, organizerOnly, deleteEvent);
router.get('/:id', getEventById);


module.exports = router;
