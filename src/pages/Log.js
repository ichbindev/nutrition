import React, { useState } from "react";
import Searchbar from "../components/Searchbar";
import NutritionLabel from "../components/NutritionLabel";


const Log = ({ nutritionInfo }) => {
  const [food, setFood] = useState(null);

  // simulate a network request until backend
  const onSearch = term => {
    const idx = Math.floor(Math.random() * nutritionInfo.length);
    console.log(idx);
    setTimeout(() => setFood(nutritionInfo[idx]), 450);
  };

  return (
    <div className="log-container">
      <Searchbar onSearch={onSearch}/>
      {food && <NutritionLabel nutritionInfo={food} />}
    </div>
  );
};

export default Log;
