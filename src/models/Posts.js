const mongo = require ('mongoose');

const PostSchema = new mongo.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    user: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Post = mongo.model('Post', PostSchema);

module.exports = Post;