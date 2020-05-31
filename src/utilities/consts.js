import React from "react";
import sushi from "../images/sushi.jpg";
import mango from "../images/mango.jpg";
import vegetables from "../images/vegetables.jpg";

export const homeCarouselItems = [
  {
    src: sushi,
    altText: "Sushi",
    caption: "We all need to eat food",
  },
  {
    src: mango,
    altText: "SMango",
    caption: "Most of us eat fruit",
  },
  {
    src: vegetables,
    altText: "Vegetables",
    caption: "Some of us eat vegetables",
  },
];

export const HOME = "HOME";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const MEAL_DISPLAY_NAMES = Object.freeze({
  breakfast: "Breakfast",
  lunch: "Lunch",
  dinner: "Dinner",
  snacks: "Snacks",
});

export const ACTIVITY_MULTIPLIERS = {
  male: {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    very: 1.725,
    extremely: 1.9,
  },
  female: {
    sedentary: 1.1,
    light: 1.275,
    moderate: 1.35,
    very: 1.525,
    extremely: 1.7,
  },
};

export const ThemeContext = React.createContext(themes.dark);
