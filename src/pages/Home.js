import React from "react";
import NutritionLabel from "../components/NutritionLabel";

const Home = ({ nutritionInfo }) => {
  return (
    <div>
      <form>
        <label className="food-search-input-label" for="food-search-input">Search for a food:&nbsp;</label>
        <input className="food-search-input" name="food-search-input" type="text" placeholder="Banana"/>
        <button className="food-search-submit" type="submit">Search</button>
      </form>
      {nutritionInfo.map(food => <NutritionLabel key={food.name} nutritionInfo={food} />)}
    </div>
  );
};

export default Home;
