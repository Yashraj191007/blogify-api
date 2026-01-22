const { get } = require("mongoose");

const getAllPosts = (req, res) => {
  // 1. Access the query object
  const { sortBy } = req.query; // Using destructuring

  console.log('Query parameters received:', req.query);

  let posts = [
    { id: 2, title: 'My Second Post', date: '2023-10-26' },
    { id: 1, title: 'My First Post', date: '2023-10-25' }
  ];

  // 2. Apply business logic based on the query parameter
  if (sortBy === 'date') {
    // In a real app, you'd do this sorting in the database query!
    posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort descending
    console.log('Posts have been sorted by date.');
  }

  // 3. Send the response
  res.status(200).json({
    message: 'Posts fetched successfully',
    data: posts
  });
};
// src/controllers/posts.controller.js

const getPostById = async (req, res) => {
  const postId = req.params.postId;

  res.status(200).json({
    message: "Fetching data for post with ID: " + postId
  });
};

module.exports = {
  getAllPosts,
  getPostById
  // ... getPostById ...
};