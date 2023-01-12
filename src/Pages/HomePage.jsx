import React, { useState, useEffect } from "react";
import "../App.css";
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import MovieListPagination from "../components/MovieListPagination";
import axios from "axios";



const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=60dbd333c18fb8341af66c2dcb04f4e9&language=en-US&page=1`;

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [moviesPerPage] = useState(10);
  const [value, setValue] = useState("");


  //   Popular films API
  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const res = await axios.get(API_URL);
      console.log(res.data.results);
      setMovies(res.data.results);
      setLoading(false);
    };
    getMovies();
  }, []);

  //Get current movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const filteredFilms = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(value.toLowerCase());
  });

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Search value={value} setValue={setValue}></Search>
      <MovieList movies={currentMovies } loading={loading} />
      {/* <MovieList movies={filteredFilms} loading={loading} /> */}
      
      <MovieListPagination
        moviesPerPage={moviesPerPage}
        totalMovies={movies.length}
        paginate={paginate}
      />
    </>
  );
}

export default HomePage;
