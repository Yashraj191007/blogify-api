require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');


const {requestLogger,errorHandler} = require('./middleware');
const mainRouter = require('./routes');


const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(requestLogger);
app.use(cors());


app.get('/', (res, req) => {
   res.send('Welcome to Blogify Api');
});

app.get('/about', (req, res) => {
    res.send("About Page!");
});

app.use('/api/v1', mainRouter);

app.get('/error-test', async (req, res, next) => {
    next(new Error("This is a thrown error"));
})


app.use(errorHandler);


mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/blogify')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });
