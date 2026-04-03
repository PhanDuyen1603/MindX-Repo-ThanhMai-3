const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    id: String,
    customerId: String,
    productId: String,
    quantity: Number,
    totalPrice: Number,
    });

module.exports = mongoose.model('Order', orderSchema);