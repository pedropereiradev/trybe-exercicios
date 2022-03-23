// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const append = (joke) => {
  const jokeContainer = document.querySelector('#jokeContainer');

  jokeContainer.innerText = joke;
}

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => append(data.joke));
};

window.onload = () => fetchJoke();
