const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const generateJoke = () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const joke = JSON.parse(this.responseText);
        jokeElement.innerHTML = joke.value;
      } else {
        jokeElement.innerHTML = 'Something went wrong (Not Funny)';
      }
    }
  };
  xhr.send();
};

jokeBtn.addEventListener('click', generateJoke);
