import { ACTIVITY_MULTIPLIERS } from "./consts";

const calculateBMA = (gender, height, weight, age) => {
  const baseBMA = height * 6.25 + weight * 9.99 - age * 4.92;
  if (gender === "female") {
    return baseBMA - 161;
  } else if (gender === "male") {
    return baseBMA + 5;
  }
  return baseBMA;
};

export const convertPoundsToKG = (pounds) => {
  return pounds * 0.45359237;
};

export const convertInchesToCM = (inches) => {
  return inches * 2.54;
};

/**
 * Total Daily Energery Expenditure, or TDEE, is the  
 * number of calories a person burns a day on average.
 * It is an estimate on the number of calories you would 
 * need to eat to maintain wait and a good starting point
 * to add or remove calories to meet your weight goals.
 * 
 * The TDEE formula is simple, it requires the Base Metabolic 
 * Rate for the indivudual and the amount of activity they do 
 * on an average week. BMA is the number of calories your body
 * would burn a day without moving, just from breathing, digesting,
 * etc. It is calculated from your gender, height, weight and age.
 * After that is calculated it gets multiplied by an individual's
 * activity level to come up with the number of calories you 
 * personally burn a day. 
 */
export const calculateTDEE = (
  gender,
  height,
  weight,
  age,
  activityMultiplier,
  imperial
) => {
  console.log("gender", gender, "\nheight", height, "\nweight", weight, "\nage", age, "\nactivityMultiplier", activityMultiplier, "\nimperial", imperial)
  // ensure measurements are metric for formula
  if (imperial) {
    height = convertInchesToCM(height);
    weight = convertPoundsToKG(weight);
  }
  let BMA = calculateBMA(gender, height, weight, age);
  if (activityMultiplier) {
    BMA *= ACTIVITY_MULTIPLIERS[gender][activityMultiplier];
  }
  return BMA;
};
