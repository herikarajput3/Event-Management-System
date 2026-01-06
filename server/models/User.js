const mongoose = require('mongoose');

const commonSchema = {
    type: String,
    required: true,
}

const userSchema = new mongoose.Schema({
    name: {
        ...commonSchema,
        trim: true,
    },

    email: {
        ...commonSchema,
        unique: true,
        lowercase: true,
        trim: true,
    },

    password: {
        ...commonSchema,
        minlength: 6,
    },

    role: {
        type: String,
        enum: ['organizer', 'attendee'],
        default: 'attendee',
    },
},
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);