import React, { useState } from "react";
import BottomTab from "../components/BottomTab";
import Hero from "../components/Hero";
import styles from "./styles.module.css";

const Home = ({ history }) => {
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState(false);

  const next = () => {
    if (!gender || !status) {
      setMsg(true);
    } else {
      localStorage.setItem("Gender", gender);
      localStorage.setItem("Married", status);
      history.push("/dependents");
    }
  };
  return (
    <div>
      <Hero bg={styles.bg1}>
        <div className={styles.forms}>
          {msg && (
            <div className="alert alert-warning">All Fields are required</div>
          )}
          <div className={styles.inputContainer}>
            <label>Select Gender</label>
            <select
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              className="form-control"
            >
              <option>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className={styles.inputContainer}>
            <label>Are you Married</label>
            <select
              onChange={(e) => setStatus(e.target.value)}
              value={status}
              className="form-control"
            >
              <option>Select Marital Status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="submit"
              className={`btn form-control ${styles.lbanColor}`}
              value="Next"
              onClick={next}
            />
          </div>
        </div>
      </Hero>
      <BottomTab />
    </div>
  );
};

export default Home;
