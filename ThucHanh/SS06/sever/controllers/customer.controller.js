const mongoose = require('mongoose');
require('../models/customer.model');
const CustomerModel = mongoose.model('Customer');
const generateKey = require('../utils/generateKey');

exports.getAPIKey = async (req, res) => {
    try {
        const {id} = req.params;
        const customer = await CustomerModel.findById(id);
        if (!customer) throw new Error('Customer not found!');

        const apiKey = generateKey(customer);
        customer.apiKey = apiKey;
        await customer.save();
        
        res.json({
            apiKey,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        });
    }
};