const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//   const url = req.url;

//   if (url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('<h1>Welcome</h1>');
//   } else if (url === '/about') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('<h1>About</h1>');
//   } else {
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.end('<h1>Page not found</h1>');
//   }
// });

const posts = [
  { id: 1, title: 'Post One', body: 'This is post 1' },
  { id: 2, title: 'Post Two', body: 'This is post 2' },
];

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    fs.readFile('index.html', (err, file) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>Sorry, we have a problem!</h1>');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(file);
      }
    });
  } else if (url === '/api/posts') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true, data: posts }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page not found</h1>');
  }
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
