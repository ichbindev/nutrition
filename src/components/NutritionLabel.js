import React from "react";
import Calories from "./Calories";
import Nutrient from "./Nutrient";
import Servings from "./Servings";

const NutritionLabel = ({ nutritionInfo }) => {
  const { calories, servingSize, macros, micros, warning } = nutritionInfo;
  return (
    <>
      <h1 className="food-name">{nutritionInfo.name}</h1>
      <div className="nutrition-info">
        <h1 className="nutrition-facts">Nutrition Facts</h1>
        <Servings servingSize={servingSize} />
        <Calories calories={calories} />
        <div className="nutrients">
          <div className="macronutrients-label">
            {macros.map(macro => (
              <Nutrient nutrient={macro} isMacro={true} key={macro.type} />
            ))}
          </div>
          <div className="micronutrients-label">
            {micros.map(micro => (
              <Nutrient nutrient={micro} isMacro={false} key={micro.type} />
            ))}
          </div>
          <div className="nutrition-warning">{warning}</div>
        </div>
      </div>
    </>
  );
};

export default NutritionLabel;
