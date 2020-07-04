import React, { useState } from "react";
import NutritionLabel from "../components/NutritionLabel";
import Carousel from "../components/Carousel";
import SearchBar from "../components/Searchbar";
import { HOME } from "../utilities/consts";

const Home = () => {
  

  return (
    <div>
      <Carousel type={HOME} />
    </div>
  );
};

export default Home;
