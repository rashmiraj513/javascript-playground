const date = new Date(2022, 1, 10, 10, 0, 0);
console.log(date, typeof date);

// Get Hour and Month from the date
const month = date.getMonth();
const hour = date.getHours();

// Immediate Value Evaluation
switch (month) {
  case 1:
    console.log('It is January!');
    break;
  case 2:
    console.log('It is February!');
    break;
  case 3:
    console.log('It is March!');
    break;
  default:
    // There is no need to put break statement with default.
    console.log('It is not Jan, Feb or March!');
}

// Range Evaluation
switch (true) {
  case hour < 12:
    console.log('Good Morning!');
    break;
  case hour < 18:
    console.log('Good Afternoon!');
    break;
  default:
    console.log('Good Night!');
}
