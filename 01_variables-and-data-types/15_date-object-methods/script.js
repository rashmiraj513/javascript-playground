let date = new Date();

let x = date.toString();
console.log(x, typeof x);

x = date.getTime();
console.log(x, typeof x);

x = date.valueOf();
console.log(x, typeof x);

// Extract the components of the date
x = date.getFullYear();
console.log(x, typeof x);

// Month is 0-based.
x = date.getMonth() + 1;
console.log(x, typeof x);

x = date.getDate();
console.log(x, typeof x);

x = date.getDay();
console.log(x, typeof x);

x = date.getHours();
console.log(x, typeof x);

x = date.getMinutes();
console.log(x, typeof x);

x = date.getSeconds();
console.log(x, typeof x);

x = date.getMilliseconds();
console.log(x, typeof x);

x = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
console.log(x, typeof x);

// Using API `Intl`
// Format according to US
x = Intl.DateTimeFormat('en-US').format(date);
console.log(x, typeof x);

// Format according to UK
x = Intl.DateTimeFormat('en-UK').format(date);
console.log(x, typeof x);

// Format according to default
x = Intl.DateTimeFormat('default').format(date);
console.log(x, typeof x);

// Get month name in long format (Full Month Name)
x = Intl.DateTimeFormat('default', { month: 'long' }).format(date);
console.log(x, typeof x);

// Get month name in short format (Month Name Abbreviation)
x = Intl.DateTimeFormat('default', { month: 'short' }).format(date);
console.log(x, typeof x);

// Get year in 2-digits
x = Intl.DateTimeFormat('default', { year: '2-digit' }).format(date);
console.log(x, typeof x);

// Get year in numeric
x = Intl.DateTimeFormat('default', { year: 'numeric' }).format(date);
console.log(x, typeof x);

// The same thing can be achieved using toLocaleDaetString() function.
x = date.toLocaleDateString('default', { month: 'short' });
console.log(x, typeof x);

// Format the date according to your time zone
x = date.toLocaleDateString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/New_York',
});
console.log(x, typeof x);
