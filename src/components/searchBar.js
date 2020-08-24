import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, setPage }) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setPage(1);
        }}
        placeholder="search for a book here"
        value={searchTerm}
      />
    </div>
  );
};

export default SearchBar;
