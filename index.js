document.addEventListener('DOMContentLoaded', function() {
    const moviesContainer = document.querySelector(".movies-container");
    
    moviesContainer.innerHTML = renderMovies(movieData);
    
});

function renderMovies(movieArray) {
    let movieHtmlArray = movieArray.map((currentMovie) => {
        return `<div class="movies-container>
            <h5 class="movie-title>${currentMovie.Title}</h5>
            <h6 class="movie-release>${currentMovie.Year}</h6>
            <p class="card-text>${currentMovie.imdbID}</p>
            <h2>${currentMovie.Type}</h2>
            <img ${currentMovie.Poster}>
            </div>`;
    })
    return movieHtmlArray.join("");
}