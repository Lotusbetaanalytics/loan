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
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer fqb1+6Xh66x8xcL54m/AcW+V0S+GDBpYiSohUr5oLgOzOJV8jg/JdeXq3Xr8CuuYAA5g+XK7TTQ25LS1LrT3Fg==`,
        },
      };
      const { data } = await axios.post(
        "https://ussouthcentral.services.azureml.net/workspaces/fcf5daff29fa4260a9781506c2684f2b/services/3e790412571b401f8c57636458d86836/execute?api-version=2.0&format=swagger",
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
                "Loan_Status",
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
                  Loan_Status,
                ],
              ],
            },
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
