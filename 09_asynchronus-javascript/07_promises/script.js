// Create a promise - Promise 2
const promise = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    console.log('Async Task 1 Completed!');
    resolve();
  }, 1000);
}).then(() => console.log('Promise 1 Consumed!'));

// then can be called from here too.
// promise.then(() => console.log('Promise 1 Consumed...'));

// Promise 2
const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = true;
    if (!error) {
      resolve({ name: 'John', age: 30 });
    } else {
      reject('Something went wrong!');
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((err) => console.log(err))
  .finally(() => console.log('The promise has been resolved or, rejected!'));

console.log('Hello from the global scope!');
