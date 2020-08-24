import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import BookItem from "./bookItem";

const BookList = ({ books }) => (
  <Accordion defaultActiveKey="0">
    {books &&
      books.map((book, index) => {
        const eventIndex = index + 1;
        return (
          <Card>
            <Card.Header>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey={eventIndex}
                className="text-left"
              >
                <b>Title: </b>
                {book.book_title}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={eventIndex}>
              <Card.Body>
                <BookItem book={book} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        );
      })}
  </Accordion>
);

export default BookList;
