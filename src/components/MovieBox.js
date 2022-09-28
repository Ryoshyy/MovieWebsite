import React, { useState } from "react";

const MovieBox = ({movies, loading}) => {
    const API_IMG = "https://image.tmdb.org/t/p/w500"
    if(loading){
        return <h2>Loading...</h2>
    }
  return (
    <>
        <ul>
            {
                movies.map((movie, i) =>(
                    <li>
                        {movie.title}
                        <img src={API_IMG + movie.poster_path}></img>
                    </li>
                ))
            }
        </ul>
        
      
    </>
  );
};

export default MovieBox;
