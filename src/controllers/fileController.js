const { bucket } = require('../config/firebase');

const uploadFileFirebase = async (req, res) => {
    try {
        if (!req.file){
            return res.status(400).json({error: 'No file uploaded'});
        }
        
        const fileName = Date.now()+'-'+req.file.originalname; // Genera el nombre para el archivo
        const file = bucket.file(fileName)

        const stream = file.createWriteStream({
            metadata: {
                contentType:req.file.mimetype // Tipo de contenido del archivo, mimetype informa que tipo de archivo es
            }
        });

        stream.on('error', (error) => {
            console.error('Error on write stream:', error);
            return res.status(500).json({error: 'Error uploading file'});
            
        })

        stream.on('finish', async () => {
            await file.makePublic(); // Hace el archivo público
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${file.name}`; // URL pública del archivo
            return res.status(200).json({message: 'File uploaded successfully', url: publicUrl});
        })

        stream.end(req.file.buffer); // Finaliza el stream con el contenido del archivo

    } catch (error) {
        console.error('Error uploading file:', error);
    }
}

// const uploadFileLocal = async (req, res)=> {
//     if (!req.file) {
//         return res.status(400).json({error: 'No file uploaded'});
//     }

//     res.status(200).json({
//         message: 'File uploaded successfully',
//         fileName: req.file.filename,
//         filePath: req.file.path
//     })
// }

module.exports = {
    uploadFileFirebase,
    // uploadFileLocal
}