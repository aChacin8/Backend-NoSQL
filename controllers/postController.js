const ModelPost = require ('../models/Posts');
const ModelUser = require  ('../models/Users');

const createPost = async (req, res) => {
    const {title, description, user} = req.body

    const userId = await ModelUser.findById(user)
        
    if (!userId){
        res.status(400).json({message: `El usuario con ID ${user}`})
    }
    try {
        const post = new ModelPost({
            title,
            description,
            userId: user
        })
        await post.save()
        res.status(200).json(`Post ${post.title} created`)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const getAllPost = async (req, res) => {
    try {
        const post = await ModelPost.find()
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createPost,
    getAllPost
}