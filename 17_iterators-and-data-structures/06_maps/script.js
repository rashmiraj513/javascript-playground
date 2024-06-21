const map = new Map();
console.log(map);

// Add values to the map
map.set('name', 'Rashmi Raj');
map.set(1, 'blue');

// When the key value already exists in the map, then the value will be overwritten.
map.set(1, 'green');
map.set(2, 'red');

console.log(map);

// Accessing values from the map
console.log(map.get('name'));
console.log(map.get(1));
console.log(map.get(2));

// Size of the map
console.log(map.size);

console.log(map.has(1));
console.log(map.has(3));

// Delete a value from the map
map.delete('name');
console.log(map);

const peopleMap = new Map();
peopleMap.set('Brad', { phone: '555-555-555', email: 'brad@gmail.com' });
peopleMap.set('Jack', { phone: '555-555-555', email: 'jack@gmail.com' });
peopleMap.set('Jill', { phone: '555-555-555', email: 'jill@gmail.com' });

console.log(peopleMap);

// Print the mail of people using forEach method
peopleMap.forEach((person) => console.log(person.email));

// Iterator of the Map
const iterator = peopleMap.values();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Convert the map to an array
const peopleArray = Array.from(peopleMap);
console.log(peopleArray);
