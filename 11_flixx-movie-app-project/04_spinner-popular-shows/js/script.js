const fullPathArray = window.location.pathname.split('/');

const global = {
  currentPage: fullPathArray[fullPathArray.length - 1],
};

// Highlight Active Link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

// Function to fetch API key
async function fetchAPIKey() {
  const data = await fetch('./js/keys.json').then((res) => res.json());
  const API_KEY = data[0].API_KEY;
  return API_KEY;
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  // Create a file with name `keys.json` and place it under the same folder (js)
  // and place the api key generated from www.themoviedb.org/settings/api
  // inside an array and inside an object with name API_KEY.
  const API_KEY = await fetchAPIKey();
  const API_URL = `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&language=en-US`;
  showSpinner();
  const data = await fetch(API_URL).then((res) => res.json());
  hideSpinner();
  return data;
}

// Function to display 20 most popular movies
async function displayPopularMovies() {
  // Using Object Destructuring
  const { results } = await fetchAPIData('movie/popular');
  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
      <a href='movie-details.html?id=${movie.id}'>
        ${
          movie.poster_path
            ? `<img src='https://image.tmdb.org/t/p/w500${movie.poster_path}' class='card-img-top' alt='${movie.title}'/>`
            : `<img src='./img/no-image.jpg' class='card-img-top' alt='${movie.title}'/>`
        }
      </a>
      <div class='card-body'>
        <h5 class='card-title'>${movie.title}</h5>
        <p class='card-text'>
          <small class='text-muted'>Release: ${movie.release_date}</small>
        </p>
      </div>`;
    document.getElementById('popular-movies').appendChild(div);
  });
}

// Function to display 20 most popular TV shows
async function displayPopularShows() {
  // Using Object Destructuring
  const { results } = await fetchAPIData('tv/popular');
  results.forEach((show) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
      <a href='tv-details.html?id=${show.id}'>
        ${
          show.poster_path
            ? `<img src='https://image.tmdb.org/t/p/w500${show.poster_path}' class='card-img-top' alt='${show.name}'/>`
            : `<img src='./img/no-image.jpg' class='card-img-top' alt='${show.name}'/>`
        }
      </a>
      <div class='card-body'>
        <h5 class='card-title'>${show.name}</h5>
        <p class='card-text'>
          <small class='text-muted'>Air Date: ${show.first_air_date}</small>
        </p>
      </div>`;
    document.getElementById('popular-shows').appendChild(div);
  });
}

// Function to show the spinner
function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}

// Function to hide the spinner
function hideSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}

// Init App
function init() {
  switch (global.currentPage) {
    case '/':
    case 'index.html':
      displayPopularMovies();
      break;
    case 'shows.html':
      displayPopularShows();
      break;
    case 'movie-details.html':
      console.log('Movie Details');
      break;
    case 'tv-details.html':
      console.log('TV Details');
      break;
    case 'search.html':
      console.log('Search');
      break;
  }
  highlightActiveLink();
}

// Event Listener
document.addEventListener('DOMContentLoaded', init);
