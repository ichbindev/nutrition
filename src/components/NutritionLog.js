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
    name: 'Rice', 
    meal: 'Lunch',
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

const NutritionLog = ({ userNutritionForDay }) => {
  return (
    <div className="log-table-container">
      <Table className="log-table">
        <thead>
          <tr>
            <th>Food</th>
            <th>Calories</th>
            <th>Serving</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {userNutritionForDay.forEach(food => 
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
