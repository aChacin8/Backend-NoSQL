const express = require('express');

const router = express.Router();

const healthCheck = (req, res) => {
    res.status(200).json({
        statuss:'ok',
        message: 'Server is running...'
    })
} //Compreuba que el servidor funciona correctamente

router.get('/healthcheck', healthCheck);

module.exports = router;