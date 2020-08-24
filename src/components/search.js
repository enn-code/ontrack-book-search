import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar";
import Results from "./results";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState([]);

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Results searchTerm={searchTerm} />
    </div>
  );
};

export default Search;
