const express = require ('express');
const { registerUser, authUser} = require ('../controllers/authController');

const authRoutes = express.Router();

authRoutes.post ('/register', registerUser);
authRoutes.post ('/login', authUser)

module.exports = authRoutes;