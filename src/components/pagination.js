import React from "react";

const Pagination = ({ totalResults, page, setPage }) => {
  return (
    <div>
      {page > 1 && (
        <span
          onClick={() => {
            setPage(page - 1);
          }}
        >
          -
        </span>
      )}
      <span>{page}</span>
      {/* only add plus if there are more results to display */}
      {totalResults > page * 20 && (
        <span onClick={() => setPage(page + 1)}>+</span>
      )}
    </div>
  );
};

export default Pagination;
