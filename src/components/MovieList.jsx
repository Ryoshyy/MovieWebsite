import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import styles from "../css/MovieList.module.css";


const MovieList = ({ movies, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className={`col ${styles.movielist}`}
            >
              <MovieCard movie={movie}></MovieCard>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default MovieList;
