const multer = require ('multer');

const storage = multer.memoryStorage(); // Almacena los archivos en memoria

const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // Limite de 5MB por archivo
    }, 
});

module.exports = upload;