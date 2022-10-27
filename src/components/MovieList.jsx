import React, { useState } from "react";
import styles from "../css/MovieList.module.css";

const MovieList = ({ movies, loading }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {movies.map((movie, i) => (
        <div key={movie.id} className={styles.movielist}>
          
            <img
              className={styles.movie_poster}
              src={API_IMG + movie.poster_path}
            ></img>
            <div className={styles.movie_title}>{movie.title}</div>
          
        </div>
      ))}
    </>
  );
};
export default MovieList;
