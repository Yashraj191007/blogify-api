const express = require('express');
const router = express.Router();
const { protect } = require('../middleware');
const postController = require('../controllers/posts.controller');

// Matches: GET /api/v1/posts
router.get('/', (req, res) => {
    res.json({ message: "Fetching all posts" });
});

// Matches: GET /api/v1/posts/:id
router.get('/:id', (req, res) => {
    res.json({ message: `Fetching post with ID: ${req.params.id}` });
});

router.post('/', protect, postController.createPost);
router.put('/:id', protect, postController.updatePost);
router.delete('/:id', protect, postController.deletePost);

module.exports = router;