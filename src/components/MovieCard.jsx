import React from "react";
import styles from "../css/MovieList.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MovieCard({ movie }) {
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <>
    
      <a href="/">
        <img
          alt="err"
          className={styles.movie_poster}
          src={API_IMG + movie.poster_path}
        ></img>
        <div className={styles.movie_title}>1{movie.title}</div>
      </a>
    </>
  );
}

export default MovieCard;
