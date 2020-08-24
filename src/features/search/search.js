import React, { useState } from "react";
import { useParams } from "react-router-dom";
import queryString from "query-string";
import { withRouter } from "react-router-dom";
import SearchBar from "./searchBar";
import Results from "../results/results";

const Search = ({ location }) => {
  const queryParams = queryString.parse(location.search);
  const [page, setPage] = useState(queryParams.page || 1);

  let { searchParam } = useParams();
  const [searchTerm, setSearchTerm] = useState([searchParam] || []);

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setPage={setPage}
      />
      <Results searchTerm={searchTerm} page={page} setPage={setPage} />
    </div>
  );
};

export default withRouter(Search);
