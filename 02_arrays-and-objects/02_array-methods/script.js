const arr = [34, 55, 95, 34, 20, 15];
console.log(arr);

// Push Method: Adds the specified element to the end of the array and returns the length of the array after adding
// the specified element.
console.log(arr.push(200));
arr.push(100);
console.log(arr);

// Pop Method: Removes the last element from the array and returns it.
console.log(arr.pop());
console.log(arr);

// Unshift Method: Adds the specified element to the starting of the array and returns the length of the array
// after adding the specified element.
console.log(arr.unshift(-3));
console.log(arr);

// Shift Method: Removes the first element from the array and returns it.
console.log(arr.shift());
console.log(arr);

// Reverse Method: Reverse the original array and returns it.
console.log(arr.reverse());
console.log(arr);

// Includes Method: Checks whether the specified element is present in the array or not.
// If present, returns true otherwise false.
x = arr.includes(200);
console.log(x);

x = arr.includes(-3);
console.log(x);

// IndexOf Method: Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
x = arr.indexOf(34);
console.log(x);

x = arr.indexOf(-54);
console.log(x);

// Slice Method: Creates a shallow copy of a portion of an array into a new array object.
// The original array is not modified. This function can take up to two arguments: the start index (inclusive)
// and the end index (exclusive).
x = arr.slice(1, 4);
console.log(x, arr);

x = arr.slice(1);
console.log(x, arr);

// When no arguments are passed, then the arary returns the original array.
x = arr.slice();
console.log(x, arr);

// In case of negative indexes, -1 points to the last element in the array.
x = arr.slice(-3, -1);
console.log(x, arr);

// Splice Method: The splice method in JavaScript is used to add, remove, or replace elements in an array.
// Unlike the slice method, which does not modify the original array, splice directly modifies the original array on which it is called.
// This function returns the removed elements as an array. If no elements are removed then returns an empty array.
// This function can take the following arguments:
// - start: The index at which to start changing the array.
// - deleteCount (optional): The number of elements to remove from the array. If set to zero, no elements will be removed.
// - item1, item2, ... (optional): The elements to add to the array, starting from the start index. If no items are specified, splice will only remove elements.

// Removing elements using splice method
x = arr.splice(1, 1);
console.log(x, typeof x, arr);

// Adding elements using splice method
x = arr.splice(1, 0, 233, 122);
console.log(x, arr);

// Replacing elements using splice method
x = arr.splice(2, 1, -100);
console.log(x, arr);

// Combining removing and add elements
x = arr.splice(1, 1, 432, 'Hello');
console.log(x, arr);

// Using Negative Indices
// The index -1 denotes the last element.
console.log(arr);
x = arr.splice(-3, 2);
console.log(x, arr);

// Chaining of methods
x = arr.splice(1, 4).reverse().toString().charAt(0);
console.log(x);
