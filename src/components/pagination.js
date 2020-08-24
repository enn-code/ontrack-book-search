import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <div>
      <span
        onClick={() => {
          const updatedPageNumber = page - 1;
          if (updatedPageNumber > 0) {
            setPage(page - 1);
          }
        }}
      >
        -
      </span>
      <span>{page}</span>
      <span onClick={() => setPage(page + 1)}>+</span>
    </div>
  );
};

export default Pagination;
