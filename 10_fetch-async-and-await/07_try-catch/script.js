try {
  console.log(x);
} catch (e) {
  // Use comma (,) to print `e` in the next line.
  console.log('Error: ', e);
  // Use add (+) to print `e` in the same line.
  console.log('Error: ' + e);
}

function double(num) {
  if (isNaN(num)) {
    throw new Error('num' + ' is not a number!');
  }
  return num * 2;
}

try {
  // No error in this case
  const y = double(2);
  console.log(y);

  // Throw error in this case because 'hello' is a string, not a number.
  const str = double('hello');
  console.log(str);
} catch (err) {
  console.log(err);
}
