import React from "react";
import { Link } from "react-router-dom";
import "../css/MovieList.module.css";
import { ApiInfo } from "../api/ApiInfo";

function FavouriteMovieCard(movies) {
  // console.log(movies.movies)
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="container">
      <div className="row">
        {movies.movies.map((movie) => (
          <Link  key={movie.id} to={`/movie/${movie.id}`}>
            <img src={API_IMG + movie.poster_path} alt="" />
            {movie.title}
            {movie.id}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FavouriteMovieCard;
