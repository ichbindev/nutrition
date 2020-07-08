import React from "react";
import { MEAL_DISPLAY_NAMES } from '../utilities/consts';
import FancyTable from './FancyTable';

const NutritionLog = (props) => {
  const fancyTableData = convertLogToFancyTables(props);
  return (
    <div className="log-table-container">
      {Object.entries(fancyTableData).map((meal) => {
        const [mealName, tableData] = meal;
        return (
          <>
            <h3>{MEAL_DISPLAY_NAMES[mealName]}</h3>
            {console.log(mealName, tableData)}
            <FancyTable tableContents={tableData}/>
          </>
        );
      })}
      ;
    </div>
  );
};

// converts the users journal into an object with key equal to meal name and value equal to the rows of a fancyTable to display
function convertLogToFancyTables({ userNutritionForDay, onDelete }) {
  const logHeaders = ["Food", "Calories", "Amount", "Brand", "Delete"];
  const meals = {};
  Object.entries(userNutritionForDay).forEach((meal) => {
    const mealTable = [];
    mealTable.push(logHeaders);
    const [mealName, foods] = meal;
    foods.forEach((food) => {
      const foodRow = createRow(food, onDelete);
      mealTable.push(foodRow);
    });
    meals[mealName] = mealTable;
  });

  return meals;
}

function createRow(food, onDelete) {
  return [
    food.name,
    food.calories,
    food.amount,
    food.brand,
    deleteButton(food.id, onDelete),
  ];
}

function deleteButton(id, onDelete) {
  return (
    <button className="log-delete-food" id={id} onClick={(e) => onDelete(e)}>
      x
    </button>
  );
}

export default NutritionLog;
