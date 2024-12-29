class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter((movie) => movie.rating === "PG");
    }
}

// Example usage:
const movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
const movie2 = new Movie("Finding Nemo", "Pixar", "PG");
const movie3 = new Movie("The Dark Knight", "Warner Bros", "R");
const movie4 = new Movie("The Incredibles", "Pixar");

const movies = [movie1, movie2, movie3, movie4];
console.log(Movie.getPG(movies)); // Returns movies with "PG" rating
