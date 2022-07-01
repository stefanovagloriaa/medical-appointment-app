import { Fragment } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useRouter } from "next/router";

import Link from "next/link";
import classes from "./Login.module.css";

const Login = () => {
  const router = useRouter();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    dispatch(authActions.login());
    router.push("/");
  };

  return (
    <Fragment>
      <form onSubmit={formSubmitHandler} className={classes.formStyle}>
        <label className={classes.labelStyle} htmlFor="username">
          Username
        </label>
        <input ref={usernameRef} className={classes.inputStyle} id="username" />
        <label className={classes.labelStyle} htmlFor="password">
          Password
        </label>
        <input ref={passwordRef} className={classes.inputStyle} id="password" />
        <button>LogIn</button>
        <Link href="/signUp">
          <button>You have not account yet?</button>
        </Link>
      </form>
    </Fragment>
  );
};

export default Login;
