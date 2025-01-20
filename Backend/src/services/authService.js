const User = require('../models/User');

const createUser = async (name, email, password) => {
    try {
        const user = new User({ name, email, password });
        await user.save();
        return user;
    } catch (error) {
        console.error('Error in service:', error);
        throw error;
    }
};

const findUserByEmail = async (email) => {
    try {
        return await User.findOne({ email });
    } catch (error) {
        console.error('Error finding user:', error);
        throw error;
    }
};

module.exports = {
    createUser,
    findUserByEmail
};