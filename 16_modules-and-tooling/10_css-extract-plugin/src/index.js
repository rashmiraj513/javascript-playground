// A module bundler is a tool that takes all of your source code, which is usually multiple files
// and bundles them together, often times, into a single bundle file.
// There are multiple module bundler like webpack, Snowpack, Parcel and Vite where webpack
// is the oldest one.
const message = require('./message');
require('./css/styles.css');

console.log(message);

const helloWorld = () => console.log('Hello World using Babel');
helloWorld();
