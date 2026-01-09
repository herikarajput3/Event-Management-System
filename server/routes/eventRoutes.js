const express = require('express');
const router = express.Router();

const { createEvent, getAllEvents, updateEvent, getEventById, softDeleteEvent, hardDeleteEvent, updateEventStatus } = require('../controllers/eventController');
const { protect } = require('../middlewares/authMiddleware');
const { organizerOnly } = require('../middlewares/roleMiddleware');

router.post('/', protect, organizerOnly, createEvent);
router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.put('/:id', protect, organizerOnly, updateEvent);

// soft delete (default)
router.delete(
    '/:id',
    protect,
    organizerOnly,
    softDeleteEvent
);

// hard delete (explicit)
router.delete(
    '/:id/hard',
    protect,
    organizerOnly,
    hardDeleteEvent
);

router.patch(
    '/:id/status',
    protect,
    organizerOnly,
    updateEventStatus
);



module.exports = router;
