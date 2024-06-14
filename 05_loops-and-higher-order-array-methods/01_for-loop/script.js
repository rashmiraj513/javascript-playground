// for([INITIAL_EXPRESSION]; [CONDITION_EXPRESSION]; [INCREMENT_EXPRESSION])
//   STATEMENT
// INITIAL_EXPRESSION - Initializes a variable / counter.
// CONDITION_EXPRESSION - Condition that the loop will continue to run as
// long as it is met or, until the condition is false.
// INCREMENT_EXPRESSION - Expression that will be executed after each iteration
// of the loop. Usually increments the variable.
// STATEMENT - Code that will be executed each time the loop is run. To
// execute a `block` of ConvolverNode, use the `{}` syntax.

// A for loop which iterates from i = 1 to 10 and prints on the condition.
for (let i = 0; i <= 10; i++) {
  if (i == 7) {
    console.log('7 is my lucky number.');
  } else {
    console.log('Number ' + i);
  }
}

// Nested Loops
for (let i = 1; i <= 10; i++) {
  console.log('Number ' + i);
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'John') {
    console.log(names[i] + ' is the best');
  } else {
    console.log(names[i]);
  }
}
