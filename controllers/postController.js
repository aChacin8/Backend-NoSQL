const ModelPost = require ('../models/Posts');
const ModelUser = require  ('../models/Users');

const createPost = async (req, res) => {
    const {title, description, user} = req.body
    if (!title || !description) {
        res.status(400).json({ error: 'Title and content are required' });
    }

    const userId = await ModelUser.findById(user)
    if (!userId){
        res.status(400).json({error: `El usuario con ID ${user} no existe`})
    }
    
    try {
        const post = new ModelPost({
            title,
            description,
            userId: user
        })
        await post.save()
        res.status(201).json(`Post ${post.title} created`)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getAllPost = async (req, res) => {
    try {
        const post = await ModelPost.find()
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    createPost,
    getAllPost
}