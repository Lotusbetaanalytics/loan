import axios from "axios";
import {
  USER_LOAN_REQUEST,
  USER_LOAN_SUCCESS,
  USER_LOAN_FAIL,
} from "../constants/loanConstants";

export const requestLoan =
  (
    Loan_ID,
    Gender,
    Married,
    Dependents,
    Education,
    Self_Employed,
    ApplicantIncome,
    CoapplicantIncome,
    LoanAmount,
    Loan_Amount_Term,
    Credit_History,
    Property_Area,
    Loan_Status
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_LOAN_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "https://mltest.azure-api.net/",
          Authorization: `Bearer fqb1+6Xh66x8xcL54m/AcW+V0S+GDBpYiSohUr5oLgOzOJV8jg/JdeXq3Xr8CuuYAA5g+XK7TTQ25LS1LrT3Fg==`,
        },
      };
      const { data } = await axios.post(
        "https://mltest.azure-api.net/",
        {
          Inputs: {
            input1: [
              {
                Loan_ID,
                Gender,
                Married,
                Dependents,
                Education,
                Self_Employed,
                ApplicantIncome,
                CoapplicantIncome,
                LoanAmount,
                Loan_Amount_Term,
                Credit_History,
                Property_Area,
                Loan_Status,
              },
            ],
          },

          GlobalParameters: {},
        },
        config
      );

      dispatch({
        type: USER_LOAN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_LOAN_FAIL,
        payload:
          error.response && error.response.data.error
            ? error.response.data.error
            : error.message,
      });
    }
  };
