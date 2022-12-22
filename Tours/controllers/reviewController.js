const Review = require('./../models/reviewModel');

exports.getAllReviews = async (req, res) => {
    try {
        //const queryObj = {...req.query};
        //const excludeFields = ['page', 'sort', 'limit', 'fields'];
        //excludeFields.forEach(el => delete queryObj[el]);
        let filter = {}
        if(req.params.tourId) filter = { tour: req.params.tourId };

        const query = Review.find(filter);

        const reviews = await query
        res.status(200).json({
            status: 'success',
            results: reviews.length,
            data: {
                reviews
            }
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.createReview = async (req, res) => {
    try{
        if(!req.body.tour) req.body.tour = req.params.tourId;
        
        const newReview = await Review.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                review: newReview
            }
        });
    } catch (err){
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }  
}

exports.getReview = async (req, res) => {
    try{
        const review = await Review.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                review
            }
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.updateReview = async (req, res) => {
    try{
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                review
            }
        });
    } catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

exports.deleteReview = async (req, res) => {
    try{
        await Review.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}
