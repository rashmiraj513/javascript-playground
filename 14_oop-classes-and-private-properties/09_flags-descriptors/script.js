// [[Configurable]] - if `true`, the property can be deleted and these attributes can be modified, otherwise not.
// [[Enumerable]] - if `true`, the property will be returned in a `for...in` loop, otherwise not.
// [[Writable]] - if `true`, the value of the property can be changed, otherwise not.
// [[Value]] - the value of the property.

// This value can't be changed.
Math.PI = 4;
console.log(Math.PI);

// Check for descriptors.
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);

const obj = {
  name: 'Rectangle 1',
  width: 10,
  height: 10,
};

// Set the descriptors (By default, all descriptor is true for user-defined objects.)
descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor);

Object.defineProperty(obj, 'name', {
  writable: false,
  configurable: false,
  enumerable: false,
});

descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor);

// Try to change the name after changing the descriptors.
obj.name = 'New Name';
console.log(obj.name); // Name not changed because writable is false.

// Try to delete the name after changing the descriptors.
delete obj.name; // Name not deleted because configurable is false.
console.log(obj);

// Since, the enumerable descriptor of name is false so, it can't be
// displayed using looping.
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`);
}

// To see the flag descriptors of each key of an object.
console.log(Object.getOwnPropertyDescriptors(obj));
