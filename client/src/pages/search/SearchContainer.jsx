import React from "react";
import TopResults from "./TopResults";
import SearchInMovies from "./SearchInMovies";
import SearchInShows from "./SearchInShows";

const SearchContainer = () => {
  return (
    <div className="w-full h-full pl-6 pt-8">
      <TopResults />
      <SearchInMovies />
      <SearchInShows />
    </div>
  );
};

export default SearchContainer;
