import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = (req, res) => {
  res.render("movies", { title: "Movies!", movies: getMovies() });
};
export const movieDetail = (req, res) => {
  const {
    params: { id: movieId },
  } = req;
  if (Number(movieId)) {
    const title = getMovieById(movieId).title;
    const description = getMovieById(movieId).description_full;
    const genres = getMovieById(movieId).genres;
    const year = getMovieById(movieId).year;
    const rating = getMovieById(movieId).rating;
    res.render("detail", { title, description, genres, year, rating });
  } else {
    res.render("404");
  }
};
export const filterMovie = (req, res) => {
  const {
    query: { year },
  } = req;
  const {
    query: { rating },
  } = req;
  if (year || rating) {
    if (year) {
      const title = `Searching by year : ${year}`;
      const movies = getMovieByMinimumYear(year);
      res.render("movies", { title, movies });
    } else {
      const title = `Searching by rating : ${rating}`;
      const movies = getMovieByMinimumRating(rating);
      res.render("movies", { title, movies });
    }
  } else {
    res.render("404");
  }
};
