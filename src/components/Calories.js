import React from "react";

const Calories = ({ calories }) => {
  return (
    <div className="calorie-info">
      <div className="amount-per-serving">
        <strong>Amount Per Serving</strong>
      </div>
      <div className="calories">
        <strong>Calories</strong>
        &nbsp;
        <span className="calorie-amount">
          <strong>{calories}</strong>
        </span>
      </div>
    </div>
  );
};

export default Calories;
