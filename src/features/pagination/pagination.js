import React from "react";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const Pagination = ({ history, totalResults, page, setPage, searchTerm }) => {
  return (
    <Row xs="12" className="justify-content-center my-5">
      <Button
        onClick={() => {
          const newPage = Number(page) - 1;
          setPage(newPage);
          history.push(`/${searchTerm}?page=${newPage}`);
        }}
        disabled={page <= 1}
      >
        -
      </Button>

      <Button variant="secondary">{page}</Button>

      {/* only enable plus if there are more results to display. Assume items per page = 20 */}
      <Button
        onClick={() => {
          const newPage = Number(page) + 1;
          setPage(newPage);
          history.push(`/${searchTerm}?page=${newPage}`);
        }}
        disabled={totalResults <= page * 20}
      >
        +
      </Button>
    </Row>
  );
};

export default withRouter(Pagination);
