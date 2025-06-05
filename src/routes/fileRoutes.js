const express = require('express');
const upload = require('../middlewares/uploadMiddleware');
const uploadLocalMiddleware = require('../middlewares/uploadLocalMiddleware'); // Middleware para subir archivos localmente
const { uploadFileFirebase, uploadFileLocal } = require('../controllers/fileController');
const authMiddleware = require('../middlewares/authMiddleware');

const fileRoutes = express.Router();

fileRoutes.post('/cloud', authMiddleware, upload.single('file'), uploadFileFirebase); // Ruta para subir un archivo a Firebase, se usa el middleware de autenticación y el middleware de subida de archivos
// fileRoutes.post('/local', authMiddleware, uploadLocalMiddleware.single('file'), uploadFileLocal);

module.exports = fileRoutes;