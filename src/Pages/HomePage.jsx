import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import MovieList from "../components/MovieList";
import MovieListPagination from "../components/MovieListPagination";
import axios from "axios";

const GET_API_URL = (searchValue, page) => {
  if (searchValue.trim().length) {
    return `https://api.themoviedb.org/3/search/movie?api_key=60dbd333c18fb8341af66c2dcb04f4e9&language=en-US&query=${searchValue}&page=${page}`; 
  }

  return `https://api.themoviedb.org/3/movie/popular?api_key=60dbd333c18fb8341af66c2dcb04f4e9&language=en-US&page=${page}`;
}

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const getMovies = async () => {
    setLoading(true);
    const res = await axios.get(GET_API_URL(searchValue, currentPage));
    console.log(res.data.results);
    console.log(res.data.total_pages);
    setMovies(res.data.results);
    setTotalPages(res.data.total_pages);
    setLoading(false);
  };

  // Popular films API
  useEffect(() => {
    setCurrentPage(1);
    getMovies();
  }, [searchValue]);

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
        <Search value={searchValue} setValue={setSearchValue}></Search>
        <MovieList movies={movies} loading={loading} />
        <MovieListPagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          paginate={paginate}
        />
    </>
  );
}

export default HomePage;
