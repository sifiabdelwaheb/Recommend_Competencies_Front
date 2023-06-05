import { ADD_TEST } from "../actions";

export const AddTest = (testId) => {
  return {
    type: ADD_TEST,
    testId,
  };
};
