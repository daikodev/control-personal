import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPageChange }) => (
  <ReactPaginate
    previousLabel={"<"}
    nextLabel={">"}
    breakLabel={"..."}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={10}
    onPageChange={(event) => onPageChange(event.selected)}
    containerClassName={"pagination"}
    activeClassName={"active"}
  />
);

export default Pagination;
