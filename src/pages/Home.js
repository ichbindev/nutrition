import React from "react";
import NutritionLabel from "../components/NutritionLabel";
import Carousel from "../components/Carousel";
import SearchBar from "../components/Searchbar";
import { HOME } from "../utilities/consts";

const Home = ({ nutritionInfo }) => {
  return (
    <div>
      <Carousel type={HOME} />
      <SearchBar />
      {nutritionInfo.map(food => (
        <NutritionLabel key={food.name} nutritionInfo={food} />
      ))}
    </div>
  );
};

export default Home;
