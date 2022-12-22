const express = require('express');
const tourController = require('./../controllers/tourController');
const reviewRouter = require('./../routes/reviewRoutes');

const authController = require('./../controllers/authController')

const router = express.Router();

router.use('/:tourId/reviews', reviewRouter);

router
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour);

router
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(authController.protect, 
        authController.restrictTo('admin', 'lead-guide'), 
        tourController.deleteTour);

module.exports = router;