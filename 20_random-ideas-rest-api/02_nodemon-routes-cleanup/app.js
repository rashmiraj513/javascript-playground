const express = require('express');
const ideasRouter = require('./routes/ideas');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the RandomIdeas API...</h1>');
});

app.use('/api/ideas', ideasRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}...`);
});
