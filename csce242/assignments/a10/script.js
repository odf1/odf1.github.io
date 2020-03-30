async function showMovies(){
    let responce = await fetch('https://portiaportia.github.io/csce242/json/movies.json');
    let moviesJSON = await responce.json();
    let movieDiv = document.getElementById("movie-section");


    for(i in moviesJSON){
        let movie = moviesJSON[i];
        movieDiv.append(getMovieItem(movie));
     //  movieDiv.append(showImg(movie));
    }
}

function getMovieItem(movie){
    let movieSection = document.createElement("section");
    movieSection.classList.add("movieItem");
   
    let img = document.createElement("img");
    img.src = `https://portiaportia.github.io/csce242/json/${movie.img}`;
    movieSection.append(img);
    img.classList.add("zoom");

    let h3Title = document.createElement("h3");
    h3Title.innerText = movie.title;
 //   movieSection.append(h3Title);
    

    let ulElem = document.createElement("ul");
    movieSection.append(ulElem);
   
    ulElem.append(h3Title);
    let liDirector = document.createElement("li");
    liDirector.innerText = `Director: ${movie.director}`;
    ulElem.append(liDirector);

    let liActors = document.createElement("li");
    liActors.innerText = `Actors: ${movie.actors.join(', ')}`;
    ulElem.append(liActors);

    let liYear = document.createElement("li");
    liYear.innerText = `Year Released: ${movie.year}`;
    ulElem.append(liYear);

    let liGenres = document.createElement("li");
    liGenres.innerText = `Genres: ${movie.genres.join(', ')}`;
    ulElem.append(liGenres);

    let liDesc = document.createElement("li");
    liDesc.innerText = `Description: ${movie.description}`;
    ulElem.append(liDesc);

    

    
    return movieSection;
}
/*function showImg(movie){
    let imgSection = document.createElement("section");
    let img = document.createElement("img");
    img.src = `https://portiaportia.github.io/csce242/json/${movie.img}`;
    imgSection.append(img);
    img.classList.add("zoom");

    return imgSection
}*/
window.onload = function(){
    this.showMovies();
}