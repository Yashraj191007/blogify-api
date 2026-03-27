// src/routes/posts.routes.js
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware');
const postController = require('../controllers/posts.controller');

// GET /api/v1/posts — public read
router.get('/', postController.getAllPosts);

// GET /api/v1/posts/:id — public read
router.get('/:id', postController.getPostById);

// POST /api/v1/posts — protected
router.post('/', protect, postController.createPost);

// PATCH /api/v1/posts/:id — protected
router.patch('/:id', protect, postController.updatePost);

// DELETE /api/v1/posts/:id — protected
router.delete('/:id', protect, postController.deletePost);

module.exports = router;