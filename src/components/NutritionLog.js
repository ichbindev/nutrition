import React from "react";
import { Table } from "reactstrap";
import { MEAL_DISPLAY_NAMES } from "../utilities/consts";

const NutritionLog = ({ userNutritionForDay, onDelete }) => {
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

export default NutritionLog;
