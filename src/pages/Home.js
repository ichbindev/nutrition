import React from "react";
import Carousel from "../components/Carousel";
import { HOME } from "../utilities/consts";

const Home = () => {
  return (
    <div>
      <Carousel type={HOME} />
    </div>
  );
};

export default Home;
