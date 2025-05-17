const mongo = require ('mongoose');

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
    }
});

const User = mongo.model('User', UserSchema)

module.exports = User;