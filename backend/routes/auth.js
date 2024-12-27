// routes/authRouter.js
const express = require('express');
const { registerUser, loginUser, getProtected } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Public Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected Route
router.get('/protected', authMiddleware, getProtected);

module.exports = router;
