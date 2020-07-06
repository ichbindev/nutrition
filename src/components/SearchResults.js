import React from "react";
import FancyTable from "./FancyTable";

const sampleSearchResults = [
  ["Food", "Brand", "Calories"],
  ["Hot Dog", "Oscar Meyer", "120"],
  ["Burrito", "Chipotle", "1 Million"],
];

const SearchResults = () => {
  return <FancyTable tableContents={sampleSearchResults} />;
};

export default SearchResults;
