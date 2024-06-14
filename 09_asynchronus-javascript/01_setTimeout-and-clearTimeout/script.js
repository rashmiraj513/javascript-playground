// Thread of Execution
// JavaScript is a single-threaded language.
// Single sequential flow of control.
// JavaScript is a synchronous language with asynchronous capabilities.
// A thread has a call stack and memory.

// How Async JavaScript works?
// JavaScript is a synchronous language as its core but there are some web APIs
// which provides it asynchronous features.
// When these web API functions are called, those gets are added in task queue
// and then when the asynchronous part completes, it gets passed to call stack from the task queue,
// providing this asynchronous capability.
// However, there are some functions called PromiseJobs which gets added to MicroTask Queue instead
// of Task Queue and remaining works as the same.

// setTimeout - Accepts a callback function and a time (in milliseconds) and runs the callback
// function after the specified time. This returns a timer id.

// This will execute after 2000 milliseconds.
setTimeout(function () {
  console.log('Hello from callback function!');
}, 2000);

console.log('Hello from global scope!');

function changeText() {
  document.querySelector('h1').textContent = 'Hello from callback';
}

// We can also use named function in setTimeout.
// This will change the content of h1 after 3 seconds.
const timerId = setTimeout(changeText, 3000);

// clearTimeout - We can clear the setTimeout using the timer id returned by setTimeout.
document.querySelector('#cancel').addEventListener('click', () => {
  // Prints the timerId
  console.log(timerId);

  // Clear the setTimeout
  clearInterval(timerId);

  console.log('Timer Cancelled');
});
