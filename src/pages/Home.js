import React, { useState } from "react";
import NutritionLabel from "../components/NutritionLabel";
import Carousel from "../components/Carousel";
import SearchBar from "../components/Searchbar";
import { HOME } from "../utilities/consts";

const Home = ({ nutritionInfo }) => {
  const [food, setFood] = useState(null);

  // simulate a network request until backend
  const onSearch = term => {
    const idx = Math.floor(Math.random() * nutritionInfo.length);
    console.log(idx);
    setTimeout(() => setFood(nutritionInfo[idx]), 450);
  };

  return (
    <div>
      <Carousel type={HOME} />
      <SearchBar onSearch={onSearch}/>
      {food && <NutritionLabel nutritionInfo={food} />}
    </div>
  );
};

export default Home;
