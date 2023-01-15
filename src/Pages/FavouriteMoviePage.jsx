import axios from "axios";
import React, { useEffect, useState } from "react";
import FavouriteMovieCard from "../components/FavouriteMovieCard";
import { getFavouritesFromLocalStorage } from "../helpers/localStorageHelpers";

export default function FavouriteMoviePage() {
  const [favMovieIds, setFavMovieIds] = useState(getFavouritesFromLocalStorage());
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let urls = favMovieIds.map(id => `https://api.themoviedb.org/3/movie/${id}?api_key=60dbd333c18fb8341af66c2dcb04f4e9`);
    let promises = urls.map(url => axios.get(url));

    Promise.all(promises).then(results => {
      console.log(results.map(res => res.data));
      setMovies(results.map(res => res.data));
    });
  },  [favMovieIds]);

  return (
    <>
      {/* <div>{movie.title}</div>  */}
      <FavouriteMovieCard movies={movies}></FavouriteMovieCard>
    </>
  );
}
