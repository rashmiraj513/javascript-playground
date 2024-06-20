// The method `fetch` is available on window object and returns Promise. The
// first promise it returns is response and the second promise is data.
// If the request method is not specified with this method, then by default
// the request type will be 'GET'.

// Fetching a JSON file
fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

// Fetching a text file
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching from an API
fetch('https://api.github.com/users/rashmiraj513')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.querySelector('h1').textContent = data.login;
  });
