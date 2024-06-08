let date = new Date();
console.log(date, typeof date);

let d = date.toString();
console.log(d, typeof d);

// Month starts with 0.
// Format is: (YYYY, MM, DD, HH, mm, ss)
d = new Date(2024, 5, 8, 3, 58, 30);
console.log(d, typeof d);

// Date with String
// Format is: (YYYY-MM-DD)
d = new Date('2024-06-08');
console.log(d, typeof d);

// Date with Time
// Format is: (YYYY-MM-DDTHH:mm:ss)
d = new Date('2024-06-08T12:30:00');
console.log(d, typeof d);

// Date with Time
// Format is: (MM/DD/YYYY HH:mm:ss)
d = new Date('06/08/2024 12:30:00');
console.log(d, typeof d);

// Date with Hyphen and String
// This might be a day less.
d = new Date('2024-06-08');
console.log(d, typeof d);

// Date with Hyphen and String
d = new Date('06-08-2024');
console.log(d, typeof d);

// This now() function returns the number of milliseconds that have elapsed since 01 Jan, 1970, 00:00:00 UTC (Unix epoch).
d = Date.now();
console.log(d, typeof d);

d = new Date('07-10-2023 12:30:00');
// This function `getTime` will return the number of milliseconds that have elapsed since 01 Jan, 1970 to the date `d` (07-10-2023).
d = d.getTime();
console.log(d);

d = d.valueOf();
console.log(d);

// Get the number of seconds that have elapsed since 01 Jan, 1970, 00:00:00 UTC (Unix epoch).
d = Math.floor(Date.now() / 1000);
console.log(d);

// Creating a new Date object.
d = Date.now();
newDate = new Date(d);
console.log(newDate, typeof newDate);
