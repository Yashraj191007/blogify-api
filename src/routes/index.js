const express = require('express');
const router = express.Router();

// 1. Import resource routers
const postRouter = require('./posts.routes.js');
const usersRouter= require('./users.routes.js');


// 2. Map routes to their respective routers
// This means anything hitting "/posts" goes to postRouter
router.use('/posts', postRouter);
router.use('/users', usersRouter);

router.get('/about', (req, res) => {
    res.send("About Page!");
});
router.get('/error-test', async (req, res, next) => {
    next(new Error("This is a thrown error"));
})
// Future expansion:
// const userRouter = require('./users.routes.js');
// router.use('/users', userRouter);

module.exports = router;