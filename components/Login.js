import { Fragment } from "react";
import { useRef } from "react";
import Link from "next/link";
import classes from "./Login.module.css";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
  };

  return (
    <Fragment>
      <form onSubmit={formSubmitHandler} className={classes.formStyle}>
        <label className={classes.labelStyle} htmlFor="username">
          Username
        </label>
        <input className={classes.inputStyle} id="username" />
        <label className={classes.labelStyle} htmlFor="password">
          Password
        </label>
        <input className={classes.inputStyle} id="password" />
        <button>LogIn</button>
        <Link href="/signUp">
          <button>You have not account yet?</button>
        </Link>
      </form>
    </Fragment>
  );
};

export default Login;
