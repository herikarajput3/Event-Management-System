const mongoose = require('mongoose');

const commonSchema = {
    type: String,
    required: true,
    trim: true,
};

const eventSchema = new mongoose.Schema(
    {
        title: {
            ...commonSchema,
        },

        description: {
            ...commonSchema,
        },

        date: {
            type: Date,
            required: true,
        },

        location: {
            ...commonSchema,
        },

        organizerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        status: {
            type: String,
            enum: ['upcoming', 'past'],
            default: 'upcoming',
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
