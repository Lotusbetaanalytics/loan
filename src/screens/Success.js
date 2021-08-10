import React, { useEffect } from "react";
import BottomTab from "../components/BottomTab";
import Hero from "../components/Hero";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Success = ({ history }) => {
  const loan = useSelector((state) => state.loan);
  const { result, success } = loan;

  useEffect(() => {
    if (!success) {
      history.push("/");
    }
  }, [history, success]);
  const response = result && result.output1.value.Values[0][0];

  return (
    <div>
      <Hero bg={styles.bg2}>
        {response === "N" ? (
          <div className={styles.forms}>
            <h1>Sorry! Your Loan was not approved</h1>
            <Link className="btn btn-dark" to="/">
              Go Back
            </Link>
          </div>
        ) : (
          <div className={styles.forms}>
            <h1>Congratulations your loan was approved</h1>
            <Link className="btn btn-dark" to="/">
              Go Back
            </Link>
          </div>
        )}
      </Hero>
      <BottomTab />
    </div>
  );
};

export default Success;
