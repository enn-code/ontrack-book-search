import React, { useState, useEffect } from "react";
import BookList from "./bookList";
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
  }, [searchTerm]);

  return (
    <div>
      {books.length > 0 ? (
        <div>
          <p>returned {totalResults} results! </p>
          <BookList books={books} />
        </div>
      ) : (
        <div>No results!</div>
      )}
    </div>
  );
};

export default Results;
