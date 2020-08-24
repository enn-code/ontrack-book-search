import React, { useState, useEffect } from "react";
import BookList from "./bookList";
import Pagination from "./pagination";
import { postRequest } from "../utils/requests";

const Results = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log(books);
    const filters = [{ type: "all", values: [searchTerm] }];

    postRequest("http://nyx.vima.ekt.gr:3000/api/books", filters, page).then(
      (res) => {
        setBooks(res.books);
        setTotalResults(res.count);
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

export default Results;
