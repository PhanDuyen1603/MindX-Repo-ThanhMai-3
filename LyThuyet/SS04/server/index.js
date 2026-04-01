import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import UsersModel from '../model/users.js';
const app = express();
const dbName = 'MindX-Fullstack';

// Read Atlas connection string from env to avoid committing secrets.
// Example:
// mongodb+srv://<db_username>:<db_password>@mindx-fullstack.<clusterId>.mongodb.net/MindX-Fullstack?appName=MindX-Fullstack
const dbUri = process.env.MONGODB_URI;
if (!dbUri) {
  console.error('Missing MONGODB_URI. Create a .env file with MONGODB_URI=...');
  process.exit(1);
}

mongoose
  .connect(dbUri, { dbName })
  .then(() => {
    console.log('Connected to MongoDB');
    console.log('MongoDB host:', mongoose.connection.host);
    console.log('MongoDB db:', mongoose.connection.name);
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.use(express.json());

app.post('/api/v1/users', async (req, res) => {
    try {
        const { userName, email } = req.body;
        if (!userName) throw new Error('userName is required!');
        if (!email) throw new Error('email is required!');
    
        const createdUser = await UsersModel.create({
            username: userName,
            email
        });
        res.status(201).send({
            data: createdUser,
            message: 'Register successful!',
            success: true
        });
    } catch (error) {
        res.status(403).send({
            message: error.message,
            data: null,
            success: false
        });
    }
});


app.listen(8080, () => {
    console.log('Server is running!');
});
