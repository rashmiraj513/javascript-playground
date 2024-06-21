// Sets store only unique values.
const set = new Set([1, 2, 2, 3, 3, 4]);
console.log(set);

// Add a new value to the set
set.add(6);

console.log(set);

// Check for membership - has() method
console.log(set.has(5));
console.log(set.has(6));

// Remove a value from the set
set.delete(6);

// Delete a value which is not in the set - have no effect on the set.
// set.delete(5);
console.log(set);

// Convert the set to an array
const array = Array.from(set);
console.log(array);

// Convert the array to a set
const arraySet = new Set(array);

// Get the size of the set
console.log('Set Sie: ', set.size);

// Get values from the set - returns an iterator
console.log(set.values());

// Iterate through the set using a loop
for (let item of set) {
  console.log(item);
}

// Use Iterator
const iterator = set.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Clear the set
set.clear();
console.log(set);
