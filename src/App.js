import React from "react";
import NutritionLabel from "./components/NutritionLabel";
import sample from "./sample.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NutritionLabel nutritionInfo={sample} />
    </div>
  );
}

export default App;
