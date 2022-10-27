import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCarousel from "./components/MovieCarousel";
import MovieList from "./components/MovieList";
import axios from "axios";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=60dbd333c18fb8341af66c2dcb04f4e9";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  //   Popular films API
  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=60dbd333c18fb8341af66c2dcb04f4e9"
      );
      // .then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
      setLoading(false);
      // });
    };
    getMovies();
  }, []);

  return (
    <>
      <MovieCarousel movies={movies} loading={loading} />
      <MovieList movies={movies} loading={loading} />
    </>
  );
}

export default App;
