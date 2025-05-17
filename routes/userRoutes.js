const express = require ('express');
const {getAllUsers, createUsers} = require ('../controllers/userController.js');
const { getAllPost, createPost } = require('../controllers/postController.js');

const userRoutes = express.Router();

userRoutes.route('/').get(getAllUsers).post(createUsers)
userRoutes.route('/posts').get(getAllPost).post(createPost)

module.exports = userRoutes; 