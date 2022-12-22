const User = require('./../models/userModel');

exports.getAllUsers = async (req, res, next) => {
    const users = await User.find();
    
        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: {
                tours
            }
        });
};

exports.createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This not defined'
    });
};

exports.getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This not defined'
    });
};
exports.updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This not defined'
    });
};
exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This not defined'
    });
};