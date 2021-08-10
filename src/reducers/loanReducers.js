import {
  USER_LOAN_REQUEST,
  USER_LOAN_SUCCESS,
  USER_LOAN_FAIL,
} from "../constants/loanConstants";

export const userLoanReducer = (state = { result: {} }, action) => {
  switch (action.type) {
    case USER_LOAN_REQUEST:
      return { loading: true };
    case USER_LOAN_SUCCESS:
      return { loading: false, success: true, result: action.payload.Results };
    case USER_LOAN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
