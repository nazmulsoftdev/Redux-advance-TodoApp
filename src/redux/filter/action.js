import { TODOSTATUS } from "./actionType";

// create action for filter
export const TodoStatusAc = (value) => {
  return {
    type: TODOSTATUS,
    paylod: value,
  };
};
