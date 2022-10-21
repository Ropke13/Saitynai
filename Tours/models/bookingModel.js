const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    }
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;