require('dotenv').config();
const express = require('express');
const ideasRouter = require('./routes/ideas');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');

connectDB();

const app = express();

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Cors Middleware
app.use(
  cors({
    origin: ['http://localhost:3000', 'http:localhost:5000'],
    credentials: true,
  })
);

// Body Parse Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the RandomIdeas API...</h1>');
});

app.use('/api/ideas', ideasRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}...`);
});
