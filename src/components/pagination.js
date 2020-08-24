import React from "react";
import { withRouter } from "react-router-dom";

const Pagination = ({ history, totalResults, page, setPage, searchTerm }) => {
  return (
    <div>
      {page > 1 && (
        <span
          onClick={() => {
            const newPage = Number(page) - 1;
            setPage(newPage);
            history.push(`/${searchTerm}?page=${newPage}`);
          }}
        >
          -
        </span>
      )}
      <span>{page}</span>

      {/* only add plus if there are more results to display */}
      {totalResults > page * 20 && (
        <span
          onClick={() => {
            const newPage = Number(page) + 1;
            setPage(newPage);
            history.push(`/${searchTerm}?page=${newPage}`);
          }}
        >
          +
        </span>
      )}
    </div>
  );
};

export default withRouter(Pagination);
