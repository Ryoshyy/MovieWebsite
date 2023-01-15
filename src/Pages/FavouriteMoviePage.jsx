// import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FavouriteMoviePage() {
  const [favouritemovies, setFavouriteMovies] = useState([]);
  // const [movie, setMovies] = useState([]);
  
  useEffect(() => {
    let favourite
    const movieIds = localStorage.getItem("movieId");
    if(movieIds === null){
       favourite = []
       console.log('1')
    }
    else{
      favourite = JSON.parse(movieIds)
    }
    
    setFavouriteMovies(movieIds);

  }, []);
  console.log(favouritemovies)

  // useEffect(() => {
  //   const API_MOVIE = `https://api.themoviedb.org/3/movie/${favouritemovies}?api_key=60dbd333c18fb8341af66c2dcb04f4e9`;
  //   const getMovie = async () => {
  //     const res = await axios.get(API_MOVIE);
  //     setMovies(res.data);
  //   };
  //   getMovie();
  // },[favouritemovies]);
// console.log(movie)
  // const movieId = localStorage.getItem(`movieId`);
  return (
    <>
      {/* <div>{movie.title}</div>  */}
    </>
  );
}
