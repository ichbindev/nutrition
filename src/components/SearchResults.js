import React from "react";
import FancyTable from "./FancyTable";

const sampleSearchResults = [
  ["Food", "Brand", "Calories"],
  ["Hot Dog", "Oscar Meyer", "120"],
  ["Burrito", "Chipotle", "1 Million"],
  ["Blizzard", "Dairy Queen", "1000"],
  ["Pizza", "Pizza Hut", "2000"],
  ["Celery", "Old McDonald's Farm", "1"],
];

const SearchResults = () => {
  return <FancyTable tableContents={sampleSearchResults} />;
};

export default SearchResults;
