import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/FavouriteMovieCard.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function FavouriteMovieCard(movies) {
  // console.log(movies.movies)
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <body>
      <div className={`container ${styles.container}`}>
      <div className="row row-cols-lg-3">
        {movies.movies.map((movie) => (
          <div className={styles.favouriteMovieCard}>
            <Link
              className={`col ${styles.favouriteMovieItem}`}
              key={movie.id}
              to={`/movie/${movie.id}`}
            >
              <img
                className={styles.moviePoster}
                src={API_IMG + movie.poster_path}
                alt=""
              />
              <h6 className="movieTitle">{movie.title}</h6>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </body>
    
  );
}

export default FavouriteMovieCard;
