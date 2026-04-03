const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: Number,
    apiKey: String,
});

module.exports = mongoose.model('Customer', customerSchema);