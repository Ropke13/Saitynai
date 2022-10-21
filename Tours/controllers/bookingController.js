const Booking = require('./../models/bookingModel');

//const tours = JSON.parse(
//    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
//);

exports.getAllBookings = async (req, res) =>{
    try{
        const queryObj = {...req.query};
        const excludeFields = ['page', 'sort', 'limit', 'fields'];
        excludeFields.forEach(el => delete queryObj[el]);  

        const query = Booking.find(req.query);

        const bookings = await query
        res.status(200).json({
            status: 'success',
            results: bookings.length,
            data: {
                bookings
            }
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

exports.getBooking = async (req, res) => {
    try{
        const booking = await Booking.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                booking
            }
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
}

exports.createBooking = async (req, res) =>{
    try{
        const newBooking = await Booking.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                booking: newBooking
            }
        });
    } catch (err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }  
}

exports.updateBooking = async (req, res) => {
    try{
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                booking
            }
        });
    } catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}

exports.deleteBooking = async (req, res) => {
    try{
        await Booking.findByIdAndDelete(req.params.id);

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