const express = require('express');
const bookingController = require('./../controllers/bookingController');
const tourRouter = require('./../routes/tourRoutes');

const router = express.Router();

router.use('/:bookingId/tours', tourRouter);

router
    .route('/')
    .get(bookingController.getAllBookings)
    .post(bookingController.createBooking);

router
    .route('/:id')
    .get(bookingController.getBooking)
    .patch(bookingController.updateBooking)
    .delete(bookingController.deleteBooking);

module.exports = router;