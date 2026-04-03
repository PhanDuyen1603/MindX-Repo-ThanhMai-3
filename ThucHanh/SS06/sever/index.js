require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/MindX-FullStack')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB', err));

const customerRouter = require('./routes/customer.route');
app.use('/customers', customerRouter);

app.get('/', (req, res) => {
    res.json({ ok: true, message: 'Hello World' });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});