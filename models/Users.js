const mongo = require ('mongoose');
const bcrypt = require ('bcryptjs')

const UserSchema = new mongo.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type:String,
        required: true
    }
});

// Funtion to Hashed Password

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 15);
    next();
}) //Before save

const User = mongo.model('User', UserSchema)

module.exports = User;