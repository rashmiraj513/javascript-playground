const post = {
  id: 1,
  title: 'Post One',
  body: 'This is the body',
};
console.log(post, typeof post);

// Convert to JSON string
const str_1 = JSON.stringify(post);
console.log(str_1, typeof str_1);

// Parse JSON
const obj = JSON.parse(str_1);
console.log(obj, typeof obj);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
  },
];

const str_2 = JSON.stringify(posts);
console.log(str_2, typeof str_2);
