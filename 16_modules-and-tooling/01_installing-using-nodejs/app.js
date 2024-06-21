// What are Modules?
// Modules are just JavaScript files that we can import into other JavaScript files.
// We can export and import things like variables, functions and classes.
// We can also import 3rd-party packages from NPM (Node Package Manager)

// Why use Modules and Tooling?
// Makes your code much more organized and easy to read/write by breaking it up into separate files.
// Reusability
// NPM Pacakges
// Optimization
// Customized Environment

// Type of Modules
// CommonJS Modules - Commonly used by NodeJS
// ES Modules (ESM, ES6 Modules) - Commonly used in the front-end

// Modules are not supported in older browsers. There is support
// for ES Modules in new browsers, but it is still recommended to use a module bundler.

// What is NodeJS
// Node is a JavaScript runtime environment. It allows JavaScript to run on the server, much like any other language such as
// Python, Ruby, and Java etc.
// Node uses the V8 JS engine, which is the same engine that Chrome uses.
// The inner workings are similar to the browser, since it uses the V8 engine. Obviously, there is no `Window` or, `Document` in Node.

// We can also run this JS file using terminal with the command: `node app.js` or, `node app` [There is no need for .js extension.]
console.log('Hello from NodeJS');

async function getUser(user) {
  const response = await fetch(`https://api.github.com/users/${user}`);
  const data = await response.json();
  console.log(data);
}

getUser('rashmiraj513');
