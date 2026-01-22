const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
        select: false, // this will not return the password
    },

    role: {
        type: String,
        enum: ['organizer', 'attendee'],
        default: 'attendee',
    },
},
    { timestamps: true }
);

userSchema.pre('save', async function () {
    if (!this.isModified('password')) return;

    this.password = await bcrypt.hash(this.password, 10);
})

module.exports = mongoose.model('User', userSchema);