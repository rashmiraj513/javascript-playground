const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ name: 'Rashmi Raj', age: 23 }), 1000);
});

// Handle Promise with `then()`
promise.then((data) => console.log(data));

// Handle Promise with async function
async function getPromise() {
  const response = await promise;
  console.log(response);
}
getPromise();

// // Handle GET method with async function
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  // Since, res is also a promise so, add await keyword.
  const data = await res.json();
  console.log(data);
}
getUsers();

// Async Arrow Function
const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  // throw new Error('Hello World!');
  console.log(data);
};
getPosts();

// getPosts().catch((err) => console.log(err));
