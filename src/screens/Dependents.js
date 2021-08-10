import React, { useState } from "react";
import BottomTab from "../components/BottomTab";
import Hero from "../components/Hero";
import styles from "./styles.module.css";

const Dependents = ({ history }) => {
  const [dependents, setDependents] = useState("");
  const [education, setEducation] = useState("");
  const [employment, setEmployment] = useState("");
  const [msg, setMsg] = useState(false);

  const next = () => {
    if (!dependents || !education || !employment) {
      setMsg(true);
    } else {
      localStorage.setItem("Dependents", dependents);
      localStorage.setItem("Education", education);
      localStorage.setItem("Self_Employed", employment);
      history.push("/income");
    }
  };
  const back = () => {
    history.push("/");
  };
  return (
    <div>
      <Hero bg={styles.bg3}>
        <div className={styles.forms}>
          {msg && (
            <div className="alert alert-warning">All Fields are required</div>
          )}
          <div className={styles.inputContainer}>
            <label>Select Dependents</label>
            <select
              onChange={(e) => setDependents(e.target.value)}
              value={dependents}
              className="form-control"
            >
              <option>Select .....</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3+">3+</option>
            </select>
          </div>
          <div className={styles.inputContainer}>
            <label>Select Education</label>
            <select
              onChange={(e) => setEducation(e.target.value)}
              value={education}
              className="form-control"
            >
              <option>Select .....</option>
              <option value="Graduate">Graduate</option>
              <option value="Not Graduate">Not Graduate</option>
            </select>
          </div>
          <div className={styles.inputContainer}>
            <label>Are You Self Employed</label>
            <select
              onChange={(e) => setEmployment(e.target.value)}
              value={employment}
              className="form-control"
            >
              <option>Select .....</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
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

export default Dependents;
