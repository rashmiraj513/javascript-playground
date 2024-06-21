const app = {
  nextIndex: 0,
  teams: [
    'Mumbai Indians',
    'Chennai Super Kings',
    'Kolkata KnightRiders',
    'Gujrat Titans',
  ],
  next() {
    if (this.nextIndex >= this.teams.length) {
      return { done: true };
    }

    const returnValue = { value: this.teams[this.nextIndex], done: false };
    this.nextIndex += 1;
    return returnValue;
  },
};

console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());
console.log(app.next());

const app_1 = {
  teams: [
    'Mumbai Indians',
    'Chennai Super Kings',
    'Kolkata KnightRiders',
    'Gujrat Titans',
  ],
  [Symbol.iterator]: function () {
    let nextIndex = 0;
    return {
      next: () => {
        return nextIndex < this.teams.length
          ? { value: this.teams[nextIndex++], done: false }
          : { done: true };
      },
    };
  },
};

const iterator = app_1[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

for (const team of app_1) {
  console.log(team);
}
