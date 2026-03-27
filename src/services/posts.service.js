// src/services/posts.service.js
const Post = require('../models/post.model');

const getAllPosts = async () => {
  return await Post.find().populate('author', 'username email');
};

const getPostById = async (id) => {
  return await Post.findById(id).populate('author', 'username email');
};

const createPost = async (data) => {
  return await Post.create(data);
};

const updatePost = async (id, data) => {
  return await Post.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

const deletePost = async (id) => {
  return await Post.findByIdAndDelete(id);
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
