const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const userController = require('../controllers/users.controller');

const registrationRules = [
  body('username').notEmpty().withMessage('Username is required').trim(),
  body('email').isEmail().withMessage('Please provide a valid email address'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
];

router.get('/', (req, res) => {
    res.send('User route is working!');
});

// 3. Apply the rules as middleware to your route
router.post('/register', registrationRules, userController.registerUser);
const loginRules = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password must be provided')
];

router.post('/login', loginRules, userController.loginUser);

module.exports = router;