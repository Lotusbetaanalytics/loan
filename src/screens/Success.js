import React, { useEffect } from "react";
import BottomTab from "../components/BottomTab";
import Hero from "../components/Hero";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { USER_LOAN_RESET } from "../constants/loanConstants";

const Success = ({ history }) => {
  const loan = useSelector((state) => state.loan);
  const { result, success } = loan;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!success) {
      history.push("/");
    }
  }, [history, success]);
  const response = result && result["Scored Probabilities"];

  const goBack = () => {
    dispatch({ type: USER_LOAN_RESET });
    history.push("/");
  };

  return (
    <div>
      <Hero bg={styles.bg2}>
        {response <= "0.69" ? (
          <div className={styles.forms}>
            <h1>Sorry! Your Loan was not approved</h1>
            <button type="button" onClick={goBack} className="btn btn-dark">
              Go Back
            </button>
          </div>
        ) : (
          <div className={styles.forms}>
            <h1>Congratulations your loan was approved</h1>
            <button type="button" onClick={goBack} className="btn btn-dark">
              Go Back
            </button>
          </div>
        )}
      </Hero>
      <BottomTab />
    </div>
  );
};

export default Success;
