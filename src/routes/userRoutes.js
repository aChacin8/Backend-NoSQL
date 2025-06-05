const express = require ('express');
const {getAllUsers, createUsers} = require ('../controllers/userController.js');
const { getAllPost, createPost } = require('../controllers/postController.js');
const authMiddleware = require('../middlewares/authMiddleware.js');
const userValidation = require('../middlewares/userValidationMiddleware.js');

const userRoutes = express.Router();

userRoutes.route('/').get(authMiddleware, getAllUsers).post(userValidation, createUsers)
userRoutes.route('/posts').get(authMiddleware ,getAllPost).post(createPost)

module.exports = userRoutes; 