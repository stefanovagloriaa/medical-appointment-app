import { useRef } from "react";
import { Fragment } from "react";
import { MongoClient } from "mongodb";
import classes from "./Register.module.css";

const Register = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const passwordRef = useRef();
  const repeatedPasswordRef = useRef();

  const formSubmithandler = async (event) => {
    event.preventDefault();

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const password = passwordRef.current.value;
    const repeatedPassword = repeatedPasswordRef.current.value;

    const response = await fetch("/api/createUser", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, password }),
      headers: {
        "Content-type": "application/json",
      },
    });

    console.log("done");
  };

  return (
    <Fragment>
      <form className={classes.formStyle} onSubmit={formSubmithandler}>
        <label className={classes.labelStyle} htmlFor="firstName">
          First name:
        </label>
        <input
          ref={firstNameRef}
          className={classes.inputStyle}
          id="firstName"
        />
        <label className={classes.labelStyle} htmlFor="lastName">
          Last name:
        </label>
        <input ref={lastNameRef} className={classes.inputStyle} id="lastName" />
        <label className={classes.labelStyle} htmlFor="password">
          Password:
        </label>
        <input ref={passwordRef} className={classes.inputStyle} id="password" />
        <label className={classes.labelStyle} htmlFor="repeatPassword">
          Repeat password:
        </label>
        <input
          ref={repeatedPasswordRef}
          className={classes.inputStyle}
          id="repeatPassword"
        />
        <button>Create Account</button>
      </form>
    </Fragment>
  );
};

export default Register;
