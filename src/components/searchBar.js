import React from "react";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="search for a book here"
      />
    </div>
  );
};

export default SearchBar;
