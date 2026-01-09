const express = require('express');
const router = express.Router();

const { registerForEvent } = require('../controllers/registrationController');
const { protect } = require('../middlewares/authMiddleware');

router.post(
    '/:id/register',
    protect,
    registerForEvent
);

module.exports = router;