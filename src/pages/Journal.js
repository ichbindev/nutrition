import React, { useState } from "react";
import NutritionLog from "../components/NutritionLog";

let sampleData = {
  breakfast: [
    {
      name: "Egg",
      calories: 70,
      amount: "40g",
      brand: "HEB",
      id: 1,
    },
  ],
  lunch: [
    {
      name: "Rice",
      calories: 120,
      amount: "100g",
      brand: "Brown",
      id: 2,
    },
    {
      name: "Beans",
      calories: 80,
      amount: "120g",
      brand: "Casserole",
      id: 3,
    },
  ],
  dinner: [
    {
      name: "Hamburger",
      calories: 520,
      amount: "500g",
      brand: "McDonalds",
      id: 4,
    },
    {
      name: "Fries",
      calories: 300,
      amount: "250g",
      brand: "Burger King",
      id: 5,
    },
  ],
  snacks: [
    {
      name: "Grapes",
      calories: 50,
      amount: "100g",
      brand: "The Grape Company",
      id: 6,
    },
  ],
};

const Journal = () => {
  const [loggedFoods, setLoggedFoods] = useState(sampleData);

  // TODO: replace with reducer or other state management
  const onDelete = (e) => {
    const newFoods = {};
    for (const meal in loggedFoods) {
      newFoods[meal] = loggedFoods[meal].filter((f) => {
        return f.id !== parseInt(e.target.id, 10);
      });
    }
    setLoggedFoods(newFoods);
  };

  return (
    <div>
      <NutritionLog userNutritionForDay={loggedFoods} onDelete={onDelete} />
    </div>
  );
};

export default Journal;
