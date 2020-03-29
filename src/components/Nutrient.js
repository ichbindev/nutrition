import React from "react";

const Nutrient = ({ nutrient, isMacro }) => {
  return (
    <>
      <div className={isMacro ? "macronutrient" : "micronutrient"}>
        <span className="nutrient">
          {nutrient.type}&nbsp;{`${nutrient.amount}${nutrient.unit}`}
        </span>
      </div>
      {nutrient.subnutrients &&
        nutrient.subnutrients.map(sub => (
          <div className="subnutrient" key={sub.type}>
            &emsp;&emsp;{sub.type}&nbsp;{`${sub.amount}${sub.unit}`}
          </div>
        ))}
    </>
  );
};

export default Nutrient;
