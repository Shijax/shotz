const writeMovies = arrayofMovies => {
    let domString = '';
    arrayofMovies.forEach(movie => {
    domString += `
    <div class="movie-card" style="width: 18rem;">
    <div class="card-body">
      <h5 id="movieTitle" class="card-title">${movie.name}</h5>
      <h6 id="movieGenre" class="card-subtitle mb-2">Genre: ${movie.genre}</h6>
      <h6 id="movieRelease" class="card-subtitle mb-2">Release Date: ${movie.release}</h6>
      <p id="movieDescription" class="card-text">${movie.description}</p>
    </div>
  </div>
    `
    });
    $("#movie-div").append(domString);
};    

export default {writeMovies}