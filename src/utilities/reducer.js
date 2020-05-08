export default function(state, action) {
  switch (action.type) {
    case LOG_ADD_FOOD:
      return {...state};
    case LOG_DELETE_FOOD:
      return {...state};
    case ADD_RECIPE:
      return {...state};
    case SET_GOAL:
      return {...state};
    case SET_TDEE:
      return {...state};
    default:
      return {...state};
  }
}

const LOG_ADD_FOOD = "LOG_ADD_FOOD";
const LOG_DELETE_FOOD = "LOG_REMOVE_FOOD";
const ADD_RECIPE = "ADD_RECIPE";
const SET_GOAL = "SET_GOAL";
const SET_TDEE = "SET_TDEE"