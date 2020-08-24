import React from "react";
import Container from "react-bootstrap/Container";

const BookItem = ({ book }) => (
  <Container>
    <li>
      <b>Author(s): </b>
      {book.book_author.map((author, index) => {
        if (
          book.book_author.length > 1 &&
          book.book_author.length !== index + 1
        ) {
          return <span>{author}, </span>;
        }
        return <span>{author}</span>;
      })}
    </li>
    <li>
      <b>Year: </b>
      {book.book_publication_year}
    </li>
    <li>
      <b>Number of pages: </b>
      {book.book_pages}
    </li>
    <li>
      <b>Country:</b> {book.book_publication_country}
    </li>
    <li>
      <b>City:</b> {book.book_publication_city}
    </li>
    <li>
      <b>Book ID: </b>
      {book.id}
    </li>
  </Container>
);

export default BookItem;
