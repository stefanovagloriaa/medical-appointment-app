import { Fragment } from "react";
import classes from "./Verification.module.css";

const Verification = () => {
  return (
    <div className={classes.message}>
      Hello! You registered your account! Before being able to use your account
      you need to verify that this is your email address.
      <br></br>
      Kind Regards!
    </div>
  );
};

export default Verification;
