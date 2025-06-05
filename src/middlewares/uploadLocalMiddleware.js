// const multer = require('multer');
// const path = require('path');

// const __dirname = path.resolve(); // raíz del proyecto

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(__dirname, 'public/')); // asegúrate de que esta carpeta exista
//     },
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now();
//         const extension = path.extname(file.originalname);
//         cb(null, file.originalname.split('.')[0] + '-' + uniqueSuffix + extension);
//     }
// });

// const uploadLocalMiddleware = multer({
//     storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: (req, file, cb) => {
//         const filetypes = /jpeg|jpg|png|docx|pdf/;
//         const mimetype = filetypes.test(file.mimetype);
//         const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

//         if (mimetype && extname) {
//             return cb(null, true);
//         }
//         cb(new Error('Error: El archivo debe ser una imagen o documento válido (jpeg, jpg, png, docx, pdf)'));
//     }
// });

// module.exports = uploadLocalMiddleware;
