import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApplicantIncomeScreen from "./screens/ApplicantIncome";
import Dependents from "./screens/Dependents";
import CreditHistory from "./screens/History";
import Home from "./screens/Home";
import LoanScreen from "./screens/Loan";
import Success from "./screens/Success";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/dependents" exact component={Dependents} />
      <Route path="/income" exact component={ApplicantIncomeScreen} />
      <Route path="/loanInfo" exact component={LoanScreen} />
      <Route path="/history" exact component={CreditHistory} />
      <Route path="/success" exact component={Success} />
    </Router>
  );
}

export default App;
