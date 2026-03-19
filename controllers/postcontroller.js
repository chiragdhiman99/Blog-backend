const Post = require("../models/post");

const createPost = async (req, res) => {
    try {
        const { title, content,user,tags} = req.body;
        const post = await Post.create({ title, content,user ,tags});
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getpost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const getpostbyid = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.params.name })
    res.status(200).json(posts)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const { userId } = req.body;

    if (post.likes.includes(userId)) {
      // already liked — unlike karo
      post.likes = post.likes.filter(id => id !== userId);
    } else {
      // like karo
      post.likes.push(userId);
    }

    await post.save();
    res.status(200).json({ likes: post.likes.length });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const commentpost = async (req, res) => {
  try {
    const { userId,userName,comment } = req.body;
    const post = await Post.findById(req.params.id);
    post.comments.push({ userId,userName,text:comment });
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const deletecomment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const post = await Post.findById(req.params.id);
    post.comments = post.comments.filter(comment => comment._id.toString() !== commentId);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = {
    createPost,getpost,getpostbyid,likePost,commentpost,deletecomment,getUserPosts
};