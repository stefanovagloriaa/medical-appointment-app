import { Fragment } from "react";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <Fragment>
      <form className={classes.formStyle}>
        <label className={classes.labelStyle} htmlFor="username">
          Username
        </label>
        <input className={classes.inputStyle} id="username" />
        <label className={classes.labelStyle} htmlFor="password">
          Password
        </label>
        <input className={classes.inputStyle} id="password" />
        <button>LogIn</button>
      </form>
    </Fragment>
  );
};

export default Login;
