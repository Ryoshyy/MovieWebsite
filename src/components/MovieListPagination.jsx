import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const calculatePages = (currentPage, totalPages) => {
  let pages = [];
  if (currentPage === 1) {
    for(let i = currentPage; i < currentPage + 3; i++) {
      if (i <= totalPages) {
        pages.push(i);
      }
    }

    return pages;
  }

  if (currentPage === totalPages) {
    for(let i = currentPage; i > currentPage - 3; i--) {
      if (i >= 1) {
        pages.push(i);
        pages.sort((a, b) => a - b);
      }
    }

    return pages;
  }

  pages = [currentPage - 1, currentPage, currentPage + 1];
  return pages;
}

export const MovieListPagination = ({ currentPage, totalPages, paginate }) => {
  totalPages = totalPages > 400 ? 400 : totalPages;
  const minPage = 1;
  const maxPage = totalPages;
  console.log(totalPages, maxPage);
  const pageNumbers = calculatePages(currentPage, totalPages);

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <a onClick={() => paginate(minPage)} className="page-link">
            {'Min'}
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a onClick={() => paginate(maxPage)} className="page-link">
            {'Max'}
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default MovieListPagination;
