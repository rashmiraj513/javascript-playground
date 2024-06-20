// Sealing - Prevents properties from being added or removed. Can still be changed.
// Freezing - Prevents properties from being added, removed or changed.

const rectObj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
};

// See the flag descriptors before sealing the object
let descriptors = Object.getOwnPropertyDescriptors(rectObj);
console.log(descriptors);

// Seal the obj.
Object.seal(rectObj);

// See the flag descriptors after sealing the object (only writable is false)
descriptors = Object.getOwnPropertyDescriptors(rectObj);
console.log(descriptors);

// After sealing, no property can be added or, removed because writable is false.
rectObj.color = 'red'; // Not added
console.log(rectObj);

delete rectObj.name; // Not deleted.
console.log(rectObj);

// However, value can be changed.
rectObj.width = 20;
console.log(rectObj);

const circleObj = {
  name: 'Circle 1',
  radius: 30,
};

// See the flag descriptors before freezing the object
descriptors = Object.getOwnPropertyDescriptors(circleObj);
console.log(descriptors);

Object.freeze(circleObj);

// See the flag descriptors after freezing the object (enumerable is still true)
descriptors = Object.getOwnPropertyDescriptors(circleObj);
console.log(descriptors);

// Can not add, remove or modify
circleObj.color = 'blue'; // Not added
console.log(circleObj);

delete circleObj.name; // Not deleted
console.log(circleObj);

circleObj.name = 'New Name'; // Not modified.
console.log(circleObj);

// isFrozen and isSealed Method: Returns whether the object is frozen or, sealed respectively.
// Returns true or, false.
// If an object is frozen, it is also sealed.
console.log('rectObj is sealed?', Object.isSealed(rectObj));
console.log('rectObj is frozen?', Object.isFrozen(rectObj));
console.log('circleObj is sealed?', Object.isSealed(circleObj));
console.log('circleObj is frozen?', Object.isFrozen(circleObj));
