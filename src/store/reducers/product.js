import * as actionTypes from "../actions/actionTypes";

const initial = {
  detail: null,
  error: null
};

const set = (state, action) => {
  return {
    ...state,
    detail: action.product,
    error: null
  };
};

const fail = (state, action) => {
  return {
    ...state,
    error: action.error
  };
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_PRODUCT:
      return set(state, action);
    case actionTypes.PRODUCT_ERROR:
      return fail(state, action);
    default:
      return state;
  }
};

export default reducer;
