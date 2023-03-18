import React from "react";
import { Link } from "react-router-dom";
import useSetTitle from "../../hooks/useSetTitle";

const TermsAndCondition = () => {
  useSetTitle("T&C");
  return (
    <div>
      <h2>this is terms and condition page. </h2>
      <Link to={"/register"}>GO back to Registation page</Link>
    </div>
  );
};

export default TermsAndCondition;
