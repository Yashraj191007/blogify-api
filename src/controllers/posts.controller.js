<<<<<<< Updated upstream
// The Manager's Logic
const getAllPosts = (req, res) => {
  // A manager always returns a status code! 
  // 200 means "OK/Success"
  res.status(200).json({
    message: 'Route handled by postController.getAllPosts',
    success: true
  });
};

module.exports = {
  getAllPosts
};
=======
// src/controllers/posts.controller.js
const postService = require('../services/posts.service');

const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await postService.getPostById(req.params.id);
    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }
    res.status(200).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await postService.createPost({
      title,
      content,
      author: req.user.id,
    });
    res.status(201).json({ success: true, data: post });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const existing = await postService.getPostById(req.params.id);
    if (!existing) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    if (existing.author._id.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized to update this post' });
    }

    const updated = await postService.updatePost(req.params.id, req.body);
    res.status(200).json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const existing = await postService.getPostById(req.params.id);
    if (!existing) {
      return res.status(404).json({ success: false, message: 'Post not found' });
    }

    if (existing.author._id.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized to delete this post' });
    }

    await postService.deletePost(req.params.id);
    res.status(200).json({ success: true, message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };
>>>>>>> Stashed changes
