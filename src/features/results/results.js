import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import BookList from "./bookList";
import Pagination from "../pagination/pagination";
import { postRequest } from "../../utils/requests";
import Row from "react-bootstrap/Row";

const Results = ({ searchTerm, page, setPage, history }) => {
  const [books, setBooks] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  // fetch new books on search term change or page number change
  useEffect(() => {
    const filters = [{ type: "all", values: [searchTerm] }];

    postRequest("http://nyx.vima.ekt.gr:3000/api/books", filters, page)
      .then((res) => {
        setBooks(res.books);
        setTotalResults(res.count);
        history.push(`/${searchTerm}?page=${page}`);
      })
      .catch((err) => console.log("ERROR!", err));
  }, [searchTerm, page]);

  if (books.length === 0) {
    return <Row className="justify-content-center mt-5">No results!</Row>;
  }
  return (
    <div>
      <Row xs="12" className="justify-content-end mr-3 mb-3">
        <b>returned {totalResults} results!</b>
      </Row>
      <BookList books={books} />
      <Pagination
        totalResults={totalResults}
        searchTerm={searchTerm}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default withRouter(Results);
