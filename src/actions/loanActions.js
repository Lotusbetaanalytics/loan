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
    Property_Area
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: USER_LOAN_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer XApKWTjLP0WWUFiilCu2RCOh1VNjD9B5LJ43RP7Fl34Lnu4SUscRuWWVuOui2rz0OryLE1HwYDiuZG7bMr9l5Q==`,
        },
      };
      const { data } = await axios.post(
        "/*",
        {
          Inputs: {
            input1: {
              ColumnNames: [
                "Loan_ID",
                "Gender",
                "Married",
                "Dependents",
                "Education",
                "Self_Employed",
                "ApplicantIncome",
                "CoapplicantIncome",
                "LoanAmount",
                "Loan_Amount_Term",
                "Credit_History",
                "Property_Area",
              ],
              Values: [
                [
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
                ],
              ],
            },
          },
          GlobalParameters: {},
        },
        config
      );

      console.log(data);

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
