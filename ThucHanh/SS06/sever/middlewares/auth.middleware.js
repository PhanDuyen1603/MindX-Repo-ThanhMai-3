const mongoose = require('mongoose');
require('../models/customer.model');
const Customer = mongoose.model('Customer');

const authMiddleware = async (req, res, next) => {
    try {
        const { apiKey } = req.query;
        if (!apiKey) throw new Error('API key is required!');

        const customer = await Customer.findOne({ apiKey });
        if (!customer) throw new Error('Customer not found!');

        req.customer = customer;
        next();
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

module.exports = authMiddleware;