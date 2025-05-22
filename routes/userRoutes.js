const express = require ('express');
const {getAllUsers, createUsers} = require ('../controllers/userController.js');
const { getAllPost, createPost } = require('../controllers/postController.js');
const authMiddleware = require('../middlewares/authMiddleware.js');

const userRoutes = express.Router();

userRoutes.route('/').get( authMiddleware,getAllUsers).post(createUsers)
userRoutes.route('/posts').get(authMiddleware ,getAllPost).post(createPost)

module.exports = userRoutes; 