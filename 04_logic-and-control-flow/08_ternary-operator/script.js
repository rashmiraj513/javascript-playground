const age = 17;

// Using an If statement
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote!');
}

// Using Ternary Operator
age >= 18 ? console.log('You can vote!') : console.log('You can not vote!');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote!';

console.log(canVote);
console.log(canVote2);

// Multiple Statements
const auth = true;

// Long Version
let redirect;
if (auth) {
  alert('Welcome to the dashboard');
  redirect = '/dashboard';
} else {
  alert('Access Denied');
  redirect = '/login';
}
console.log(redirect);

// Shorter Ternary Version
const redirectMessage = auth
  ? (alert('Welcome to the dashboard'), '/dashboard')
  : (alert('Access Denied'), '/login');
console.log(redirectMessage);

// Ternary with no else
auth ? console.log('Welcome to the dashboard') : null;

// Shorthand for Ternary with no else
auth && console.log('Welcome to the dashboard');
