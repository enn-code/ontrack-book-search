import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const SearchBar = ({ searchTerm, setSearchTerm, setPage }) => {
  return (
    <div>
      <InputGroup size="lg">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">Search:</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
          placeholder="search for a book here"
          value={searchTerm}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      {/* <input
        type="text"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setPage(1);
        }}
        placeholder="search for a book here"
        value={searchTerm}
      /> */}
    </div>
  );
};

export default SearchBar;
