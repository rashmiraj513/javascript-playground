const os = require('os');

// arch() method - Architecture
console.log(os.arch());

// platform() method - Platform
console.log(os.platform());

if (os.platform() === 'darwin') {
  console.log('You are on a Mac.');
} else if (os.platform() === 'win32') {
  console.log('You are on a Windows.');
} else {
  console.log('You are on a Linux.');
}

// cpus() method - Returns an array of CPU information
console.log(os.cpus());

// freemem() method - Shows the amount of free memory in bytes.
console.log(os.freemem());
console.log(`Free Memory: ${os.freemem() / 1024 / 1024 / 1024} GB`);

// totalmem() method - Shows the amount of total memory in bytes.
console.log(os.totalmem());
console.log(`Total Memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);

// homedir() method - Shows the home directory
console.log(os.homedir());

// uptime() - Shows the uptime in seconds
console.log(os.uptime());

const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const minutes = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;

console.log(
  `Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
);

// hostname() method - Shows the hostname
console.log(os.hostname());
