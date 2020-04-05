import React from "react";
import NutritionLabel from "../components/NutritionLabel";

const Home = ({ nutritionInfo }) => {
  return (
    <div>
      {nutritionInfo.map(food => <NutritionLabel key={food.name} nutritionInfo={food} />)}
    </div>
  );
};

export default Home;
