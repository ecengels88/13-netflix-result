import 'whatwg-fetch';
import movieResults from './fill-in-results';

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-button');
const searchResults = document.querySelector('.results');

function searchForMovies(name) {
  fetch(`http://netflixroulette.net/api/api.php?title=${name}`)
  .then(res => res.json()).then((data) => {
    movieResults(searchResults, data);
  });
}

searchBtn.addEventListener('click', () => {
  searchForMovies(searchInput.value);
});

searchForMovies('Clerks');
