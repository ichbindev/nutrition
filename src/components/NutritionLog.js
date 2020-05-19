import React from "react";
import { Button, Table } from "reactstrap";

const removeLoggedItem = (e) => {
  console.log("Delete this from the list");
  console.log(e.target);
};

const foodData = [
  {
    name: 'Egg', 
    meal: 'Breakfast',
    calories: 70,
    id: 1
  },
  {
    name: 'Lunch', 
    meal: 'Rice',
    calories: 120,
    id: 2
  },
  {
    name: 'Beans', 
    meal: 'Lunch',
    calories: 80,
    id: 3
  },
  {
    name: 'Hamburger', 
    meal: 'Dinner',
    calories: 520,
    id: 4
  },
  {
    name: 'Fries', 
    meal: 'Dinner',
    calories: 300,
    id: 5
  }
];

const NutritionLog = ({ userNutritionForDay = foodData}) => {
  return (
    <div className="log-table-container">
      <Table className="log-table">
        <thead>
          <tr>
            <th>Meal</th>
            <th>Food</th>
            <th>Calories</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {userNutritionForDay.map(food => 
          <tr>
            <th scope="row">{food.meal}</th>
            <td>{food.name}</td>
            <td>{food.calories}</td>
            <td>
              <button id={food.id} onClick={(e) => removeLoggedItem(e)}>x</button>
            </td>
          </tr>
        )};
        </tbody>
      </Table>
    </div>
  );
};

export default NutritionLog;
