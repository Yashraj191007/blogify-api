const express = require('express');
const router = express.Router();

// Import resource-specific routers
const postRouter = require('./posts.routes.js');
const usersRouter = require('./users.routes.js');

// Mount each resource router on its correct path
router.use('/posts', postRouter);
router.use('/users', usersRouter);

module.exports = router;