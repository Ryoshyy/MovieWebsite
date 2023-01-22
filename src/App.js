import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MoviePage from "./Pages/MoviePage";
import FavouriteMoviePage from "./Pages/FavouriteMoviePage";
import Layout from "./components/Layout";
import "./css/index.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="movie/:id" element={<MoviePage />}></Route>
            <Route path="favourite" element={<FavouriteMoviePage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
