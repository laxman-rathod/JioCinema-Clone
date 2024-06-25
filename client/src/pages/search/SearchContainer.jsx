import React from "react";
import TopResults from "./TopResults";
import SearchInMovies from "./SearchInMovies";
import SearchInShows from "./SearchInShows";

const SearchContainer = () => {
  return (
    <div className="w-full min-h-screen h-full pl-6 pt-8 pb-16">
      <TopResults />
      <SearchInMovies />
      <SearchInShows />
    </div>
  );
};

export default SearchContainer;
