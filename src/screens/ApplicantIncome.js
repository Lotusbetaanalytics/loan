import React, { useState } from "react";
import BottomTab from "../components/BottomTab";
import Hero from "../components/Hero";
import styles from "./styles.module.css";

const ApplicantIncomeScreen = ({ history }) => {
  const [income, setIncome] = useState("");
  const [coIncome, setCoIncome] = useState("");
  const [msg, setMsg] = useState(false);
  const back = () => {
    history.push("/dependents");
  };
  const next = () => {
    if (!income || !coIncome) {
      setMsg(true);
    } else {
      localStorage.setItem("ApplicantIncome", income);
      localStorage.setItem("CoApplicantIncome", coIncome);

      history.push("/loanInfo");
    }
  };
  return (
    <div>
      <Hero bg={styles.bg2}>
        <div className={styles.forms}>
          {msg && (
            <div className="alert alert-warning">All Fields are required</div>
          )}
          <div className={styles.inputContainer}>
            <label>Applicant Income</label>
            <input
              type="number"
              onChange={(e) => setIncome(e.target.value)}
              value={income}
              className="form-control"
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Co-Applicant Income</label>
            <input
              type="number"
              onChange={(e) => setCoIncome(e.target.value)}
              value={coIncome}
              className="form-control"
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <input
                type="submit"
                className={`btn form-control btn-warning`}
                value="Back"
                onClick={back}
              />
            </div>
            <div className="col-md-6">
              <input
                type="submit"
                className={`btn form-control ${styles.lbanColor}`}
                value="Next"
                onClick={next}
              />
            </div>
          </div>
        </div>
      </Hero>
      <BottomTab />
    </div>
  );
};

export default ApplicantIncomeScreen;
