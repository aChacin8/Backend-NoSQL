const express = require ('express');
const { registerUser} = require ('../controllers/authController');

const authRoutes = express.Router();

authRoutes.post ('/register', registerUser);

module.exports = authRoutes;