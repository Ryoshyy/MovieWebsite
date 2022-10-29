import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { paginationItemClasses } from '@mui/material';
// import Stack from '@mui/material/Stack';
// import Pagination from '@mui/material/Pagination';

export const MovieListPagination = ({moviesPerPage, totalMovies,paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++){
    pageNumbers.push(i);
  }
  return (
    
    <nav >
    <ul className='pagination'>
      {pageNumbers.map(number=>(
        <li key={number} className='page-item'>
          <a onClick={()=> paginate(number)}  className='page-link'>
            {number}
          </a>
        </li>
      ))}
    </ul>
  </nav>
  

  /* <Stack spacing={2}>
      <Pagination count={10} />
    </Stack> */


  
    

    
  )
}
export default MovieListPagination