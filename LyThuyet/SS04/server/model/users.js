import mongoose from 'mongoose';
import Collections from '../../databases/collection';

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
});

const UsersModel = mongoose.model(Collections.USERS, userSchema);
export default UsersModel;