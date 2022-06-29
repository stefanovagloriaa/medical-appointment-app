import { Fragment } from "react";
import Link from "next/link";
import classes from "./Register.module.css";

const Register = () => {
  return (
    <Fragment>
      <form className={classes.formStyle}>
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
        <Link href="/signUp">
          <button>Create Account</button>
        </Link>
      </form>
    </Fragment>
  );
};

export default Register;
