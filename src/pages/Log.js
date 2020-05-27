import React from "react";
import NutritionLog from "../components/NutritionLog";

const sampleData = {
  breakfast: [{
    name: 'Egg', 
    calories: 70,
    amount: '40g',
    id: 1
  }],
  lunch: [{
    name: 'Rice', 
    calories: 120,
    amount: '100g',
    id: 2
  },
  {
    name: 'Beans', 
    calories: 80,
    amount: '120g',
    id: 3
  }],
  dinner: [{
    name: 'Hamburger', 
    calories: 520,
    amount: '500g',
    id: 4
  },
  {
    name: 'Fries', 
    calories: 300,
    amount: '250g',
    id: 5
  }],
  snacks: [{
    name: 'Grapes', 
    calories: 50,
    amount: '100g',
    id: 6
  }],
};

const Log = () => {
  return (
    <div>
      <NutritionLog userNutritionForDay={sampleData} />
    </div>
  );
};

export default Log;
