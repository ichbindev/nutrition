import React from "react";
import NutritionLabel from "../components/NutritionLabel";

const Home = ({ nutritionInfo }) => {
  return (
    <div>
      <NutritionLabel nutritionInfo={nutritionInfo} />
    </div>
  );
};

export default Home;
