const express = require('express');

const app = express();

const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Milk cartons that turn a different color the older that your milk is getting',
    tag: 'Inventions',
    username: 'SteveRogers',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
    tag: 'Software',
    username: 'BruceBanner',
    date: '2022-01-02',
  },
];

app.get('/', (req, res) => {
  // Sending a JavaScript Object as JSON.
  // res.send({ message: 'Hello, world!' });

  // Sending a normal message.
  // res.send('Hello, world!');

  // Sending a JavaScript Object as JSON using json() method.
  // res.json({ message: 'Welcome to the RandomIdeas API...' });

  res.send('<h1>Welcome to the RandomIdeas API...</h1>');
});

// Get all ideas
app.get('/api/ideas', (req, res) => {
  res.json({ success: true, data: ideas });
});

// Get one single idea based on id of the idea.
app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }
  res.status(200).json({ success: true, data: idea });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}...`);
});
