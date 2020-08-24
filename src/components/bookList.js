import React from "react";

const BookList = ({ books }) => {
  console.log(books);
  return books.map((book) => {
    return (
      <ul>
        <li>{book.book_pages}</li>
        <li>
          {book.book_author.map((author) => (
            <p>{author}</p>
          ))}
        </li>
        <li>{book.book_publication_city}</li>
        <li>{book.book_publication_country}</li>
        <li>{book.book_publication_year}</li>
        <li>{book.book_title}</li>
        <li>{book.id}</li>
      </ul>
    );
  });
};

export default BookList;
