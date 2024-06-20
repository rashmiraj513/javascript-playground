// Apply try-catch in function definition
const getUsers = async () => {
  try {
    // This API call returns json so, call json() function for this on response.
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // This API call returns text so, call text() function for this on response.
    const response = await fetch('http://httpstat.us/500');
    if (!response.ok) {
      throw new Error('Request Failed!');
    }
    // const data = await response.json();
    const data = await response.text();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

getUsers();

const getPosts = async () => {
  // This API call returns json so, call json() function for this on response.
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  // This API call returns text so, call text() function for this on response.
  const response = await fetch('http://httpstat.us/500');
  if (!response.ok) {
    throw new Error('Request Failed!');
  }
  // const data = await response.json();
  const data = await response.text();
  console.log(data);
};

// Apply try-catch at the time of function call
getPosts().catch((err) => console.log(err));
