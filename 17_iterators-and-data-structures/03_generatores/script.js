function* createTeamIterator(teams) {
  for (let i = 0; i <= teams.length; i++) {
    yield teams[i];
  }
}

const teams = ['MI', 'CSK', 'GT', 'KKR'];
const iterator = createTeamIterator(teams);

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);

// Use with for... of
for (const team of createTeamIterator(teams)) {
  console.log(team);
}

// Use with spread operator
console.log([...createTeamIterator(teams)]);

// Use with destructuring operator
const [first, second, third, fourth] = createTeamIterator(teams);
console.log(first, second, third, fourth);
