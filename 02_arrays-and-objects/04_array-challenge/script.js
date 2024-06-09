const arr = [1, 2, 3, 4, 5];
console.log(arr);

arr.unshift(0);
arr.push(6);
arr.reverse();
console.log(arr);

const arr_1 = [1, 2, 3, 4, 5];
const arr_2 = [5, 6, 7, 8, 9, 10];
const arr_3 = arr_1.slice(0, 4).concat(arr_2);
console.log(arr_3);

const arr_4 = [...arr_1, ...arr_2];
// Delete the repetitive 5.
arr_4.splice(4, 1);
console.log(arr_4);
