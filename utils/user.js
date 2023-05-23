const UserSchema = require('../models/user');

const getUserById = async (userId) => UserSchema.findById(userId);

module.exports = {
    getUserById,
};