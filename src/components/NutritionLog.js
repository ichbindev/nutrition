import React from "react";
import { Table } from "reactstrap";
import { MEAL_DISPLAY_NAMES } from "../utilities/consts";

const NutritionLog = ({ userNutritionForDay, onDelete }) => {

  const fancyTableData = 

  return (
    <div className="log-table-container">
      {Object.keys(userNutritionForDay).map((meal) => {
        return (
          <>
            <h3>{MEAL_DISPLAY_NAMES[meal]}</h3>
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
                {userNutritionForDay[meal].map((food) => {
                  return (
                    <tr>
                      <td>{food.name}</td>
                      <td>{food.calories}</td>
                      <td>{food.amount}</td>
                      <td>
                        <button className="log-delete-food" id={food.id} onClick={(e) => onDelete(e)}>
                          x
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </>
        );
      })}
      ;
    </div>
  );
};

function convertLogToFancyTables(userNutritionForDay, onDelete) {
    // create outer array
    // iterate through meals
      // create array to hold the meal
      // for each food in keys
        // turn into array of data to display
        // push  array to array of meals
    // return 3d array
}

export default NutritionLog;
