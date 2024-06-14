// Here, if statement can also be used but this is a good
// example of switch statement.
const calculator = (num_1, num_2, operator) => {
  let ans;
  switch (operator) {
    case '+':
      ans = num_1 + num_2;
      break;
    case '-':
      ans = num_1 - num_2;
      break;
    case '*':
      ans = num_1 * num_2;
      break;
    case '/':
      ans = num_1 / num_2;
      break;
    default:
      ans = 'Invalid Operator!';
  }
  return ans;
};

console.log(calculator(4, 2, '/'));
console.log(calculator(41, 12, '&'));
