import ACTIVITY_MULTIPLIERS from "./consts";

const calculateBMA = (gender, height, weight, age) => {
  const baseBMA = height * 6.25 + weight * 9.99 - age * 4.92;
  if (gender === "female") {
    return baseBMA - 161;
  } else if (gender === "male") {
    return baseBMA + 5;
  }
  return baseBMA;
};

const convertPoundsToKG = (pounds) => {
  return pounds * 0.45359237;
};

const convertInchesToCM = (inches) => {
  return inches * 2.54;
};

export const calculateTDEE = (
  gender,
  height,
  weight,
  age,
  activityMultiplier
) => {
  let BMA = calculateBMA(gender, height, weight, age);
  if (activityMultiplier) {
    BMA *= ACTIVITY_MULTIPLIERS[gender][activityMultiplier];
  }
  return BMA;
};

export const calculateTDEEImperial = (
  gender,
  height,
  weight,
  age,
  activityMultiplier
) => {
  const heightInCM = convertInchesToCM(height);
  const weightInKG = convertPoundsToKG(weight);
  return calculateTDEE(gender, heightInCM, weightInKG, age, activityMultiplier);
};
