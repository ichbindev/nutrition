import React from "react";

const Calories = ({ calories }) => {
  return (
    <div className="calorie-info">
      <div className="amount-per-serving">
        <strong>Amount Per Serving</strong>
      </div>
      <div className="calories">
        <div className="calories-string"><strong>Calories</strong></div>
        &nbsp;
        <div className="calorie-amount">
          <strong>{calories}</strong>
        </div>
      </div>
    </div>
  );
};

export default Calories;
