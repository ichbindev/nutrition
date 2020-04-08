export default function(state, action) {
  switch (action.type) {
    case LOG_ADD_FOOD:
      return {...state};
    case LOG_REMOVE_FOOD:
      return {...state};
    case ADD_RECIPE:
      return {...state};
    default:
      return state;
  }
}

const LOG_ADD_FOOD = "LOG_ADD_FOOD";
const LOG_REMOVE_FOOD = "LOG_REMOVE_FOOD";
const ADD_RECIPE = "ADD_RECIPE";