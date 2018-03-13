//data module

const fetchMovie = (url, callback) => {
    fetch(url)
        .then( (response) => {
           //console.log('prvi');
            return response.json();
        })
        .then( (movieObject) => {
            callback(movieObject);
        })
}


//main module
const urlShow = 'http://api.tvmaze.com/shows/5';

const printMovie = (movie) => {
    console.log(movie.name);
}

const printMovieId = (movie) => {
    console.log(movie.summary);
}


fetchMovie(urlShow, printMovie);
fetchMovie(urlShow, printMovieId);

console.log('nesto');











