import React, { useState } from "react";
import BottomTab from "../components/BottomTab";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import styles from "./styles.module.css";

const LoanScreen = ({ history }) => {
  const [loan, setLoan] = useState("");
  const [term, setTerm] = useState("");
  const [msg, setMsg] = useState(false);
  const back = () => {
    history.push("/income");
  };
  const next = () => {
    if (!loan || !term) {
      setMsg(true);
    } else {
      localStorage.setItem("LoanAmount", loan);
      localStorage.setItem("Loan_Amount_Term", term);

      history.push("/history");
    }
  };
  return (
    <div>
      <Navigation />
      <Hero bg={styles.bg4}>
        <div className={styles.forms}>
          {msg && (
            <div className="alert alert-warning">All Fields are required</div>
          )}
          <div className={styles.inputContainer}>
            <label>Loan Amount</label>
            <input
              type="number"
              onChange={(e) => setLoan(e.target.value)}
              value={loan}
              className="form-control"
            />
          </div>
          <div className={styles.inputContainer}>
            <label>Loan Amount Term</label>
            <select
              onChange={(e) => setTerm(e.target.value)}
              value={term}
              className="form-control"
            >
              <option>Select .....</option>
              <option value="6"> 6 Months</option>
              <option value="12"> 12 Months</option>
              <option value="36"> 36 Months</option>
              <option value="60"> 60 Months</option>
              <option value="84"> 84 Months</option>
              <option value="120"> 120 Months</option>
              <option value="180"> 180 Months</option>
              <option value="240"> 240 Months</option>
              <option value="300"> 300 Months</option>
              <option value="350"> 350 Months</option>
              <option value="360"> 360 Months</option>
              <option value="480"> 480 Months</option>
            </select>
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

export default LoanScreen;
