import { initialState } from "./initialState";
import { combineReducers } from "redux";

const availability = (state = initialState.ui.availability, action) => {
  switch (action.type) {
    case "TOGGLE_AVAILABILITY":
      console.log(action.id, !!state[action.id], state);
      return {
        ...state,
        [action.id]: !state[action.id]
      };
    default:
      return state;
  }
};
const ui = combineReducers({ availability });
const entities = (state = initialState.entities, action) => state;
export const rootReducer = combineReducers({ ui, entities });
