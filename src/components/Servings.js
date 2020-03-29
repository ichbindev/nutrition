import React from "react";

const Servings = ({ servingSize }) => {
  return (
    <div className="serving-size">
      Serving Size: {`${servingSize.amount}${servingSize.unit}`}
    </div>
  );
};

export default Servings;
