const jwt = require ('jsonwebtoken');
const ModelUser = require ('../models/Users');
const { keyToken } = require('../config/constants');

const authMiddleware = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Baerer')){
        try {
            token = req.headers.authorization.split(' ')[1]
            const decode = jwt.verify(token, keyToken);

            req.user = await ModelUser.findById (decode.id).select('-password');
            next();
        } catch (error) {
            res.status(401).json({error: 'Not authorized, token failed'})
        }
    }

    if (!token) {
        res.status(401).json({message: 'Not authorized, no token'})
    }
}

module.exports = authMiddleware;