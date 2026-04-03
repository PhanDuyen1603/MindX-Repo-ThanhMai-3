import UsersModel from '../model/users.js';

const createUser = async (req, res) => {
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
}

const getUsers = async (req, res) => {
    try {
        const users = await UsersModel.find();
        res.status(200).send({
            data: users,
            message: 'Get users successful!',
            success: true
        });
    } catch (error) {
        res.status(500).send({
            message: error.message,
            data: null,
            success: false
        });
    }
}

export default {
    createUser,
    getUsers
};