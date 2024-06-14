const date = new Date(10, 30, 2022, 6, 0, 0);
console.log(date, typeof date);

// Get Hours from the date
const hour = date.getHours();

// If Else Statement
if (hour < 12) {
  console.log('Good Morning!');
} else if (hour < 18) {
  console.log('Good Afternoon!');
} else {
  console.log('Good Night!');
}

// Nested If Statement
if (hour < 12) {
  console.log('Good Morning!');

  if (hour === 6) {
    console.log('Wake Up!');
  }
} else if (hour < 18) {
  console.log('Good Afternoon!');
} else {
  console.log('Good Night!');

  if (hour >= 20) {
    console.log('zzzzz...');
  }
}

// Logical Operators
if (hour >= 7 && hour < 15) {
  console.log('It is work time!');
}

if (hour === 6 || hour === 20) {
  console.log('Brush Your Teeth!');
}
