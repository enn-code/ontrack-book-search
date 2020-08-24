import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import BookList from "./bookList";
import Pagination from "./pagination";
import { postRequest } from "../utils/requests";

const Results = ({ searchTerm, page, setPage, history }) => {
  const [books, setBooks] = useState([]);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    console.log(books);
    const filters = [{ type: "all", values: [searchTerm] }];

    postRequest("http://nyx.vima.ekt.gr:3000/api/books", filters, page).then(
      (res) => {
        setBooks(res.books);
        setTotalResults(res.count);
        history.push(`/${searchTerm}?page=${page}`);
      }
    );
  }, [searchTerm, page]);

  return (
    <div>
      {books.length > 0 ? (
        <div>
          <p>
            <b>returned {totalResults} results!</b>
          </p>
          <BookList books={books} />
          <Pagination
            totalResults={totalResults}
            searchTerm={searchTerm}
            page={page}
            setPage={setPage}
          />
        </div>
      ) : (
        <div>No results!</div>
      )}
    </div>
  );
};

export default withRouter(Results);
