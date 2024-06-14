// Callback hell refers to the situation in asynchronous JavaScript
// programming where multiple nested callbacks make the code difficult to
// read, understand, and maintain. It typically occurs when handling
// asynchronous operations, like making multiple HTTP requests or
// interacting with databases.
function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText));
    }
  };
  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

// Callback Hell - Callback hell is a scenario in JavaScript programming
// where multiple nested callbacks result in deeply nested and hard-to-read
// code, making it difficult to maintain and understand asynchronous operations.
getData('./movies.json', (data) => {
  console.log(data);
  getData('./actors.json', (data) => {
    console.log(data);
    getData('./directors.json', (data) => {
      console.log(data);
    });
  });
});
