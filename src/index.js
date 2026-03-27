const express = require('express');
<<<<<<< Updated upstream
const app = express();
const PORT = 3000;

// Import the specialized department
const postRouter = require('./routes/posts.routes.js');

// Global Route
app.get('/', (req, res) => {
  res.send('Welcome to the Blogify API!');
});

// Route Delegation (Mounting)
app.use('/api/v1/posts', postRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
=======
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
>>>>>>> Stashed changes
