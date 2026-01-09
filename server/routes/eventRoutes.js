const express = require('express');
const router = express.Router();

const { createEvent, getAllEvents } = require('../controllers/eventController');
const { protect } = require('../middlewares/authMiddleware');
const { organizerOnly } = require('../middlewares/roleMiddleware');

router.post('/', protect, organizerOnly, createEvent);
router.get('/', getAllEvents);


module.exports = router;
