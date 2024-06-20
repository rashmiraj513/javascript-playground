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

// Init App
function init() {
  switch (global.currentPage) {
    case '/':
    case 'index.html':
      console.log('Home');
      break;
    case 'shows.html':
      console.log('Shows');
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
