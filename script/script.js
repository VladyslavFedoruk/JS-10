const movieSearchBox = document.querySelector('#movie-search-box');
const searchList = document.querySelector('.movieList_items');
const btn = document.querySelector('.btn');

async function List(searchTerm) {
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=e0ffe730`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    displayMovies(data.Search);
    console.log(data);
}

function displayMovies(items) {
    items.forEach(item => {
        let listItem = document.createElement('li');
        let oneItem = document.createElement('p');
        let listImg = document.createElement('img'); // заменяем div на img
        let listYear = document.createElement('p');
        let containerItem = document.createElement('div');
        oneItem.innerText = item.Title;
        listImg.src = item.Poster;
        listYear.innerText = item.Year;
        searchList.appendChild(listItem);
        listItem.appendChild(listImg);
        listItem.appendChild(containerItem);
        containerItem.appendChild(oneItem);
        containerItem.appendChild(listYear);


    });
}

function SearchMovie() {
    const searchTerm = (movieSearchBox.value).trim();
    searchList.innerHTML = '';
    List(searchTerm);
}

btn.addEventListener('click', SearchMovie);