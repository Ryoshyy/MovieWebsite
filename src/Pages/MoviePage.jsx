import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "../css/MoviePage.css";
import { getFavouritesFromLocalStorage } from "../helpers/localStorageHelpers";

function MoviePage() {
  const { id } = useParams();
  const [movie, setMovies] = useState([]);
  const [checked, setChecked] = useState(
    getFavouritesFromLocalStorage().includes(id)
  );
  const [movieReviews, setMovieReviews] = useState([]);
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const API_MOVIE = `https://api.themoviedb.org/3/movie/${id}?api_key=60dbd333c18fb8341af66c2dcb04f4e9`;
    const getMovie = async () => {
      const res = await axios.get(API_MOVIE);
      console.log(res.data);
      setMovies(res.data);
    };
    getMovie();
  }, [id]);

  useEffect(() => {
    const API_MOVIE_REVIEWS = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=60dbd333c18fb8341af66c2dcb04f4e9&language=en-US&page=1`;
    const getMovieReviews = async () => {
      const res = await axios.get(API_MOVIE_REVIEWS);
      setMovieReviews(res.data.results);
    };
    getMovieReviews();
  }, [id]);

  const onFavMovieChanged = () => {
    setChecked(!checked);
    let favs = getFavouritesFromLocalStorage();

    if (!checked) {
      favs.push(id);
      localStorage.setItem(`favourites`, JSON.stringify(favs));
    } else {
      let newFavs = favs.filter((movieId) => movieId !== id);
      localStorage.setItem(`favourites`, JSON.stringify(newFavs));
    }
  };

  // console.log(movieReviews);
  return (
    <>
    <div className="container">
      <section>
        <div className="Movie">
          <img
            className="Movie__img"
            src={API_IMG + movie.poster_path}
            alt=""
          />
          
          <div className="Movie__info">
            <h1 className="Movie__info__title">{movie.title}</h1>
            <div className="Movie__info__rating">
              <h5 className="Movie__info__voteaverage__title">Rating:</h5>
              {movie.vote_average}
              <div className="Movie__info__votecount">({movie.vote_count})</div>
            </div>
            <div className="Movie__info__runtime">
              <h5 className="Movie__info__voteaverage__title">Runrime:</h5>
              {movie.runtime}
            </div>
            <div className="Movie__info__releasedate">
              <h5 className="Movie__info__voteaverage__title">Release Date:</h5>
              {movie.release_date}
            </div>
            <div className="Movie__info__ganres">
              <h5 className="Movie__info__ganres__title">Ganres:</h5>
              {movie.genres?.map((ganre) => (
                <div key={ganre.id} className="Movie__info__ganres__list">
                  {ganre.name}
                </div>
              ))}
            </div>
            <input
              type="checkbox"
              checked={checked}
              value={checked}
              onChange={onFavMovieChanged}
            />
            <div className="Movie__info__overview">
              <h5 className="Movie__info__overview__title">Overwiew</h5>
              {movie.overview}
            </div>
          </div>
        </div>

        <div className="Movie__reviews">
          <h1 className="Movie__reviews__title">Reviews</h1>
          {movieReviews?.map((review) => (
            <div key={review.id} className="Movie-reviews__list">
              <h3 className="Movie-reviews__list__author">{review.author}</h3>
              <h6 className="Movie-reviews__list__content">{review.content}</h6>
            </div>
          ))}
        </div>
      </section>
      </div>
    </>
  );
}

export default MoviePage;
