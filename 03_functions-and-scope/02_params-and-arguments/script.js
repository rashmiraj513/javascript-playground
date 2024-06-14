function registerUser(user) {
  // In case, user is not provided then
  if (!user) {
    user = 'Bot';
  }
  return user + ' is registered!';
}

console.log(registerUser('Rashmi'));
console.log(registerUser());

// We can achieve the same with default parameters.
function registerUserWithDefaultParameter(user = 'Bot') {
  return user + ' is registered!';
}
console.log(registerUserWithDefaultParameter('Raj'));
console.log(registerUserWithDefaultParameter());

// Accepting variable number of arguments using rest parameters
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 5));

// Objects as Parameters
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in!`;
}

const user = {
  id: 1,
  name: 'Rashmi Raj',
};
console.log(loginUser(user));

console.log(
  loginUser({
    id: 2,
    name: 'Sonu Kumar',
  })
);

// Arrays as Parameters
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}
console.log(getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
