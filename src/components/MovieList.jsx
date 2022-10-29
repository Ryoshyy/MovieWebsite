import React, { useState } from "react";
import styles from "../css/MovieList.module.css";
import "bootstrap/dist/css/bootstrap.min.css";


const MovieList = ({ movies, loading }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {movies.map((movie, i) => (
            <div
              key={movie.id}
              className={`col-6 col-sm-3 ${styles.movielist}`}
            >
              <img
                className={styles.movie_poster}
                src={API_IMG + movie.poster_path}
              ></img>
              <div className={styles.movie_title}>{movie.title}</div>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};
export default MovieList;
