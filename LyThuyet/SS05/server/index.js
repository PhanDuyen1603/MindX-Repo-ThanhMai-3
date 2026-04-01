import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './router/users.js';    
const app = express();
// MongoDB database names are case sensitive; align with the existing DB name.
const dbName = 'MindX-FullStack';

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

app.use('/api/v1/users', usersRouter);


app.listen(8080, () => {
    console.log('Server is running!');
});
