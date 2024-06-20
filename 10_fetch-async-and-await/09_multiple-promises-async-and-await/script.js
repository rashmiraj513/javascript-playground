// API call using XMLHTTPRequest (xhr)
function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('Error: Something went wrong!');
        }
      }
    };
    setTimeout(() => xhr.send(), Math.floor(Math.random() * 3000) + 1000);
  });
}

// Calling getData on all JSON files
getData('./movies.json')
  .then((movies) => {
    console.log(movies);
    return getData('./actors.json');
  })
  .then((actors) => {
    console.log(actors);
    return getData('./directors.json');
  })
  .then((directors) => {
    console.log(directors);
  })
  .catch((err) => console.log(err));

// With async, await and getData function
async function getAllData() {
  const movies = await getData('./movies.json');
  const actors = await getData('./actors.json');
  const directors = await getData('./movies.json');
  console.log(movies, actors, directors);
}
getAllData();

// With async, await and fetch function
async function getAllDataWithFetch() {
  const moviesRes = await fetch('./movies.json');
  const movies = await moviesRes.json();

  const actorsRes = await fetch('./actors.json');
  const actors = await actorsRes.json();

  const directorsRes = await fetch('./movies.json');
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}
getAllDataWithFetch();

// With async, await and Promise.all method
async function getAllDataWithPromiseAll() {
  const [actorsRes, directorsRes, moviesRes] = await Promise.all([
    fetch('./actors.json'),
    fetch('./directors.json'),
    fetch('./movies.json'),
  ]);

  const actors = await actorsRes.json();
  const directors = await directorsRes.json();
  const movies = await moviesRes.json();
  console.log(actors, directors, movies);
}
getAllDataWithPromiseAll();

// With async, await and Promise.all method and `res.json()` in the same line
async function getAllDataWithPromiseAll2() {
  const [actors, directors, movies] = await Promise.all([
    fetch('./actors.json').then((res) => res.json()),
    fetch('./directors.json').then((res) => res.json()),
    fetch('./movies.json').then((res) => res.json()),
  ]);
  console.log(actors, directors, movies);
}
getAllDataWithPromiseAll2();
