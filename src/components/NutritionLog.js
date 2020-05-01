import React from "react";
import { Button, Table } from "reactstrap";

const removeLoggedItem = (e) => {
  console.log("Delete this from the list");
  console.log(e.target);
};

const NutritionLog = ({ userNutritionForDay }) => {
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
          <tr>
            <th scope="row">Breakfast</th>
            <td>Egg</td>
            <td>70</td>
            <td>
              <button foodName={"Egg"} onClick={(e) => removeLoggedItem(e)}>x</button>
            </td>
          </tr>
          <tr>
            <th scope="row">Lunch</th>
            <td>Rice</td>
            <td>120</td>
            <td>
              <button onClick={(e) => removeLoggedItem(e)}>x</button>
            </td>
          </tr>
          <tr>
            <th scope="row">Lunch</th>
            <td>Beans</td>
            <td>80</td>
            <td>
              <button onClick={(e) => removeLoggedItem(e)}>x</button>
            </td>
          </tr>
          <tr>
            <th scope="row">Dinner</th>
            <td>Hamburger</td>
            <td>520</td>
            <td>
              <button onClick={(e) => removeLoggedItem(e)}>x</button>
            </td>
          </tr>
          <tr>
            <th scope="row">Dinner</th>
            <td>Fries</td>
            <td>300</td>
            <td>
              <button onClick={(e) => removeLoggedItem(e)}>x</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default NutritionLog;
