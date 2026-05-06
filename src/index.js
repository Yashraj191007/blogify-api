require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');
const { requestLogger, errorHandler } = require('./middleware');
const mainRouter = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

// --- Global Middleware ---
// cors() must be mounted first to handle cross-origin requests before any other logic
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(requestLogger);

// --- API Routes ---
// Single master router mounted at /api/v1 — all resource routes are delegated from here
app.use('/api/v1', mainRouter);

// --- Centralized Error Handler (must be last) ---
app.use(errorHandler);

// --- Start Server ---
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
