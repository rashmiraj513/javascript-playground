const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;

    if (!error) {
      resolve({ name: 'Rashmi Raj', age: 24 });
    } else {
      reject('Error: Something went wrong!');
    }
  }, 1000);
});

promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((nameLength) => {
    console.log(nameLength);
  })
  .catch((error) => {
    console.log(error);
    return 123;
  })
  .then((x) => {
    console.log('This will run no matter what', x);
  });
