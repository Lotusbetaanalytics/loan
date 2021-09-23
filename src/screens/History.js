import React, { useState } from "react";
import BottomTab from "../components/BottomTab";
import Hero from "../components/Hero";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { requestLoan } from "../actions/loanActions";
import Loading from "./Loading";

const CreditHistory = ({ history }) => {
  const [credit, setCredit] = useState("");
  const [property, setProperty] = useState("");
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState(false);

  const dispatch = useDispatch();

  const back = () => {
    history.push("/loanInfo");
  };
  const next = () => {
    if (!credit || !property) {
      setMsg(true);
    } else {
      const Gender = localStorage.getItem("Gender");
      const Married = localStorage.getItem("Married");
      const Dependents = localStorage.getItem("Dependents");
      const Education = localStorage.getItem("Education");
      const Self_Employed = localStorage.getItem("Self_Employed");
      const ApplicantIncome = localStorage.getItem("ApplicantIncome");
      const CoapplicantIncome = localStorage.getItem("CoApplicantIncome");
      const LoanAmount = localStorage.getItem("LoanAmount");
      const Loan_Amount_Term = localStorage.getItem("Loan_Amount_Term");
      const Credit_History = credit;
      const Property_Area = property;
      const Loan_ID = "LP001002";
      const Loan_Status = status;

      dispatch(
        requestLoan(
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
        )
      );

      history.push("/history");
    }
  };
  const loan = useSelector((state) => state.loan);
  const { loading, error, success } = loan;
  if (success) {
    history.push("/success");
    localStorage.removeItem("Gender");
    localStorage.removeItem("Married");
    localStorage.removeItem("Dependents");
    localStorage.removeItem("Education");
    localStorage.removeItem("Self_Employed");
    localStorage.removeItem("ApplicantIncome");
    localStorage.removeItem("CoApplicantIncome");
    localStorage.removeItem("LoanAmount");
    localStorage.removeItem("Loan_Amount_Term");
  }
  return (
    <div>
      <Hero bg={styles.bg4}>
        <div className={styles.forms}>
          {error && <div className="alert alert-danger">{error}</div>}
          {msg && (
            <div className="alert alert-warning">All Fields are required</div>
          )}
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className={styles.inputContainer}>
                <label>Do you have an outstanding loan</label>
                <select
                  onChange={(e) => setCredit(e.target.value)}
                  value={credit}
                  className="form-control"
                >
                  <option>Select......</option>
                  <option value="0">Yes</option>
                  <option value="1">No</option>
                </select>
              </div>
              <div className={styles.inputContainer}>
                <label>Property Type</label>
                <select
                  onChange={(e) => setProperty(e.target.value)}
                  value={property}
                  className="form-control"
                >
                  <option>Select .....</option>
                  <option value="Urban"> Urban</option>
                  <option value="Rural"> Rural</option>
                  <option value="SemiUbarn"> SemiUbarn</option>
                </select>
              </div>
              <div className={styles.inputContainer}>
                <label>Are you going to pay back your loan</label>
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                  className="form-control"
                >
                  <option>Select .....</option>
                  <option value="Y"> Yes</option>
                  <option value="N">No</option>
                </select>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="submit"
                  className={`btn form-control btn-warning`}
                  value="Back"
                  onClick={back}
                />
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="submit"
                  className={`btn form-control ${styles.lbanColor}`}
                  value="Submit"
                  onClick={next}
                />
              </div>
            </>
          )}
        </div>
      </Hero>
      <BottomTab />
    </div>
  );
};

export default CreditHistory;
