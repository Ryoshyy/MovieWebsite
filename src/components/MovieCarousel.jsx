import React, { useState, Component } from "react";

import styles from "../css/MovieBox.module.css";
import "../css/MovieBox.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieCarousel = ({ movies, loading }) => {
  const API_IMG = "https://image.tmdb.org/t/p/w500";
  if (loading) {
    return <h2>Loading...</h2>;
  }

  /// Slider_settings

  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: false,
    responsive: [
      
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
      },
      {
        breakpoint: 1440,
        settings: { slidesToShow: 5, slidesToScroll: 5, infinite: false }
      }
      
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {movies.map((movie, i) => (
          <div key={movie.id} className={styles.movielist}>
            <div className={styles.movielistbox}>
              <a className={styles.crousel_link} href="#">
            <img
              className={styles.movie_poster}
              src={API_IMG + movie.poster_path}
            ></img>
            <div className={styles.movie_title}>{movie.title}</div>
            </a>
          </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default MovieCarousel;

// import React, { Component } from 'react'

//  class MovieCarousel extends React.Component {
  
//   render() {
    
//     const MovieCarousel = ({ movies, loading }) => {
//     const API_IMG = "https://image.tmdb.org/t/p/w500";
//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   /// Slider_settings

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 7,
//     slidesToScroll: 7,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 320,
//         settings: { slidesToShow: 1, slidesToScroll: 1, infinite: false }
//       },
//       {
//         breakpoint: 981,
//         settings: { slidesToShow: 2, slidesToScroll: 2, infinite: false }
//       },
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 3, slidesToScroll: 3, infinite: false }
//       },
//       {
//         breakpoint: 1440,
//         settings: { slidesToShow: 5, slidesToScroll: 5, infinite: false }
//       }
      
//     ],
//   };
//   this.render()
//     return (
//       <>
//       <Slider {...settings}>
//         {movies.map((movie, i) => (
//           <div key={movie.id} className={styles.movielist}>
//             <div className={styles.movielistbox}>
//               <a className={styles.crousel_link} href="#">
//             <img
//               className={styles.movie_poster}
//               src={API_IMG + movie.poster_path}
//             ></img>
//             <div className={styles.movie_title}>{movie.title}</div>
//             </a>
//           </div>
//           </div>
//         ))}
//       </Slider>
//     </>
//     )
//   }
// }
// }export default MovieCarousel;