import { Fragment } from "react";
import classes from "./Register.module.css";

const Register = () => {
  const formSubmithandler = (event) => {
    event.preventDefault();
    console.log("form submission..");
  };

  return (
    <Fragment>
      <form className={classes.formStyle} onSubmit={formSubmithandler}>
        <label className={classes.labelStyle} htmlFor="firstName">
          First name:
        </label>
        <input className={classes.inputStyle} id="firstName" />
        <label className={classes.labelStyle} htmlFor="lastName">
          Last name:
        </label>
        <input className={classes.inputStyle} id="lastName" />
        <label className={classes.labelStyle} htmlFor="password">
          Password:
        </label>
        <input className={classes.inputStyle} id="password" />
        <label className={classes.labelStyle} htmlFor="repeatPassword">
          Repeat password:
        </label>
        <input className={classes.inputStyle} id="repeatPassword" />
        <button>Create Account</button>
      </form>
    </Fragment>
  );
};

export default Register;
