import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import SearchResults from "../components/SearchResults";

const Log = ({ nutritionInfo }) => {
  const [food, setFood] = useState(null);

  // simulate a network request until backend
  const onSearch = (term) => {
    const idx = Math.floor(Math.random() * nutritionInfo.length);
    setTimeout(() => setFood(nutritionInfo[idx]), 450);
  };

  return (
    <div className="log-container">
      <Searchbar onSearch={onSearch} />
      {food && <SearchResults />}
      {/* {food && <NutritionLabel nutritionInfo={food} />} */}
    </div>
  );
};

export default Log;
