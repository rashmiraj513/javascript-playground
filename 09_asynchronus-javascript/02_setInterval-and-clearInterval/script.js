// The setInterval method takes a function to execute and a interval in milliseconds. This will keep
// executing the function with the interval until the clearInterval stops it.
// The clearInterval method takes an in-scope variable which points to the setInterval method. This stops
// the setInterval.
// Both of these timing events work together as a pair.

// If no interval is passed then by default, the interval value is 0.
const intervalID = setInterval(() => console.log(Date.now()), 1000);

function stopPrint() {
  clearInterval(intervalID);
  console.log('Set Interval Stopped!');
}

// Clear setInterval automatically after 3.1s.
setTimeout(stopPrint, 3100);

// Clear setInterval after clicking a button.
// document.getElementById('stop').addEventListener('click', stopPrint);

let intervalID2;

function startColorChange() {
  if (intervalID2 === undefined) {
    intervalID2 = setInterval(changeRandomColor, 1000);
  }
}

// Change Color function
function changeColor() {
  const buttons = document.querySelectorAll('button');
  if (document.body.style.backgroundColor !== 'black') {
    document.body.style.backgroundColor = 'black';
    buttons.forEach((button) => {
      button.style.borderColor = 'white';
    });
  } else {
    document.body.style.backgroundColor = 'white';
    buttons.forEach((button) => {
      button.style.borderColor = 'black';
    });
  }
}

// Stop Color Change function
function stopColorChange() {
  clearInterval(intervalID2);
  console.log('Color Change stopped!');
}

// Random Color Change Function
function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

// Event Listeners
document.getElementById('start').addEventListener('click', startColorChange);
document.getElementById('stop').addEventListener('click', stopColorChange);
