require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');
const { requestLogger, errorHandler } = require('./middleware');
const mainRouter = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(requestLogger);
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Blogify API');
});

app.use('/api/v1', mainRouter);

// Error handler (must be last)
app.use(errorHandler);

// Connect to DB, then start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
