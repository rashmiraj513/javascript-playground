function toggle(e) {
  e.target.classList.toggle('danger');
}

document.querySelector('button').addEventListener('click', toggle);

// Callback functions are example of asynchronous behavior only when the callback
// functions are inserted into task queue.

const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.getElementById('posts').appendChild(div);
    });
  }, 1000);
}

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}

// Calling getPosts once createPost function execution is complete.
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
