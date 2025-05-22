const ModelUser = require ('../models/Users');
const jwt = require ('jsonwebtoken');
const {keyToken} = require ('../config/constants');
const bcrypt = require ('bcryptjs');

const generateToken = (id) => {
    return jwt.sign({id}, keyToken, {expiresIn: '8d'});
};

const registerUser = async (req,res) => {
    const {name, email, password} = req.body; 

    const userExist = await ModelUser.findOne({email});

    if (userExist){
        res.status(400).json({message: 'User already exist'}) 
    }

    const user = await ModelUser.create({
        name,
        email,
        password
    });

    if (user) {
        res.status(201).json({
            _id:user._id,
            name: user.name,
            email: user.email,
            tokenAccess: generateToken(user._id)
        })
    } else {
        res.status(400).json({message: error.message})
    }
}

const authUser = async (req, res) => {
    const {email, password} = req.body; 

    const user = await ModelUser.findOne ({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json({message: 'Invalid email or password'})
    }
}       

module.exports = {
    generateToken,
    registerUser,
    authUser
}