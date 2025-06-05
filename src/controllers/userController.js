const ModelUser = require('../models/Users.js');

const createUsers = async (req, res) => {
    try {
        const user = new ModelUser(req.body);
        await user.save();
        res.status(200).json(`User ${user.name} created`);
    } catch (error) { 
        res.status(400).json({ message: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await ModelUser.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllUsers,
    createUsers
};
