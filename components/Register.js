import { useRef } from "react";
import { Fragment } from "react";
import { useRouter } from "next/router";
import classes from "./Register.module.css";

const Register = () => {
  const firstNameRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const repeatedPasswordRef = useRef();

  const router = useRouter();

  const formSubmithandler = async (event) => {
    event.preventDefault();

    const firstName = firstNameRef.current.value;
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const email = emailRef.current.value;

    const response = await fetch("https://parseapi.back4app.com/users", {
      method: "POST",
      headers: {
        "X-Parse-REST-API-Key": "7a1wvIl5jog3wuV6ssPXYSHHtSzibhlKsJ3oKIQO",
        "X-Parse-Application-Id": "1F0sC9aHng1diauZUXZJi5KZXgg4TvPIr1o9zuA6",
        "Content-type": "application/json",
        "X-Parse-Revocable-Session": 1,
      },
      body: JSON.stringify({
        firstName: firstName,
        email: email,
        username: username,
        password: password,
      }),
    });

    if (response.ok) {
      const data = await response.json();

      localStorage.setItem("objectId", data.objectId);
      localStorage.setItem("createdAt", data.createdAt);
      localStorage.setItem("sessionToken", data.sessionToken);

      router.push("/verification");
    }
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
        <label className={classes.labelStyle} htmlFor="email">
          E-mail:
        </label>
        <input ref={emailRef} className={classes.inputStyle} id="email" />
        <label className={classes.labelStyle} htmlFor="username">
          Username:
        </label>
        <input ref={usernameRef} className={classes.inputStyle} id="username" />
        <label className={classes.labelStyle} htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          ref={passwordRef}
          className={classes.inputStyle}
          id="password"
        />
        <label className={classes.labelStyle} htmlFor="repeatPassword">
          Repeat password:
        </label>
        <input
          type="password"
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
