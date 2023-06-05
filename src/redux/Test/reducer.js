import { combineReducers } from "redux";
import { ADD_TEST } from "../actions";

const initialState = {
  tests: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEST:
      return { ...state, tests: action.testId };

    default:
      return { ...state };
  }
};
