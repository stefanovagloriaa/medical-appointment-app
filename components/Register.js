import { Fragment } from "react";
import { useRouter } from "next/router";
import useInput from "../hooks/use-input";
import classes from "./Register.module.css";

const Register = () => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameIsInvalid,
    changeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailIsInvalid,
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  const {
    value: username,
    isValid: usernameIsValid,
    hasError: usernameIsInvalid,
    changeHandler: usernameChangeHandler,
    blurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = useInput((value) => value.length > 5);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordIsInvalid,
    changeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.length >= 4);

  const {
    value: repeatedPassword,
    isValid: repeatedPasswordIsValid,
    hasError: repeatedPasswordIsInvalid,
    changeHandler: repeatedPasswordChangeHandler,
    blurHandler: repeatedPasswordBlurHandler,
    reset: resetRepeatedPassword,
  } = useInput((value) => value.length >= 4);

  const router = useRouter();

  const formIsValid = false;

  if (
    firstNameIsValid &&
    usernameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    repeatedPasswordIsValid
  ) {
    formIsValid = true;
  }

  const formSubmithandler = async (event) => {
    event.preventDefault();

    if (formIsValid) {
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

        router.push("/verification");
      }
    }
  };

  return (
    <Fragment>
      <form className={classes.container} onSubmit={formSubmithandler}>
        {firstNameIsInvalid && <p>Name can not be empty!</p>}
        {emailIsInvalid && <p>Email invalid</p>}
        {usernameIsInvalid && <p>Username invalid</p>}
        {passwordIsInvalid && <p>Password invalid</p>}
        {repeatedPasswordIsInvalid && <p>Password invalid</p>}
        <div>
          <label className={classes.labelStyle} htmlFor="firstName">
            Име:
          </label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            className={classes.inputStyle}
            id="firstName"
            value={firstName}
          />
        </div>
        <div>
          <label className={classes.labelStyle} htmlFor="email">
            Имейл:
          </label>
          <input
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            className={classes.inputStyle}
            id="email"
            value={email}
          />
        </div>
        <div>
          <label className={classes.labelStyle} htmlFor="username">
            Потребителско име:
          </label>
          <input
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
            className={classes.inputStyle}
            id="username"
            value={username}
          />
        </div>
        <div>
          <label className={classes.labelStyle} htmlFor="password1">
            Парола:
          </label>
          <input
            type="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            className={classes.inputStyle}
            id="password1"
            value={password}
          />
        </div>

        <div>
          <label className={classes.labelStyle} htmlFor="repeatPassword">
            Повтори паролата:
          </label>
          <input
            type="password"
            onChange={repeatedPasswordChangeHandler}
            onBlur={repeatedPasswordBlurHandler}
            className={classes.inputStyle}
            id="repeatPassword"
            value={repeatedPassword}
          />
        </div>
        <div>
          <button disabled={!formIsValid}>Create Account</button>
        </div>
      </form>
    </Fragment>
  );
};

export default Register;
