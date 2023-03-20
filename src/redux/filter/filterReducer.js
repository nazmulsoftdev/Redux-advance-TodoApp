import { TODOSTATUS } from "./actionType";

//  create initail state for filter

const initialState = {
  status: "All",
};

// create filter reducer

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOSTATUS:
      return {
        ...state,
        status: action.paylod,
      };

    default:
      return state;
  }
};

export default filterReducer;
