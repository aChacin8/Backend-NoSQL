const multer = require ('multer');

const storage = multer.memoryStorage(); // Almacena los archivos en memoria

const upload = multer({
    storage,
    limits: {
        fileSize: 1024 * 1024 * 5, // Limite de 5MB por archivo
    }, 
});

module.exports = upload;