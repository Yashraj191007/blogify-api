// src/routes/users.routes.js
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/users.controller');

// Validation rules for registration
const registrationRules = [
  body('email').isEmail().withMessage('Please provide a valid email address'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
  body('username').notEmpty().withMessage('Username is required'),
];

// Validation rules for login
const loginRules = [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password must be provided'),
];

// GET /api/v1/users — list users
router.get('/', userController.getAllUsers);

// POST /api/v1/users/register — register a new user
router.post('/register', registrationRules, userController.registerUser);

// POST /api/v1/users/login — login a user
router.post('/login', loginRules, userController.loginUser);

module.exports = router;