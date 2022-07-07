import { useState } from "react";
import { Fragment } from "react";
import { useRouter } from "next/router";
import classes from "./Register.module.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [firstNameIsValid, setFirstNameIsValid] = useState(true);

  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);

  const [username, setUsername] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState(true);

  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [repeatedPasswordIsValid, setRepeatedPasswordIsValid] = useState(true);

  const router = useRouter();

  const formSubmithandler = async (event) => {
    event.preventDefault();

    if (firstName.length < 3) {
      setFirstNameIsValid(false);
    }
    if (!email.includes("@")) {
      setEmailIsValid(false);
    }

    if (
      username.trim() == "" ||
      password.trim() == "" ||
      repeatedPassword.trim() == ""
    ) {
      setUsernameIsValid(false);
      setPasswordIsValid(false);
      setRepeatedPasswordIsValid(false);
    }

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
  };

  return (
    <Fragment>
      <form className={classes.formStyle} onSubmit={formSubmithandler}>
        <label className={classes.labelStyle} htmlFor="firstName">
          First name:
        </label>
        <input
          onChange={(event) => setFirstName(event.target.value)}
          className={classes.inputStyle}
          id="firstName"
        />
        {!firstNameIsValid && <p>Name can not be empty!</p>}
        <label className={classes.labelStyle} htmlFor="email">
          E-mail:
        </label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          className={classes.inputStyle}
          id="email"
        />
        {!emailIsValid && <p>Email invalid</p>}
        <label className={classes.labelStyle} htmlFor="username">
          Username:
        </label>
        <input
          onChange={(event) => setUsername(event.target.value)}
          className={classes.inputStyle}
          id="username"
        />
        {!usernameIsValid && <p>Username invalid</p>}
        <label className={classes.labelStyle} htmlFor="password1">
          Password:
        </label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          className={classes.inputStyle}
          id="password1"
        />
        {!passwordIsValid && <p>Password invalid</p>}
        <label className={classes.labelStyle} htmlFor="repeatPassword">
          Repeat password:
        </label>
        <input
          type="password"
          onChange={(event) => setRepeatedPassword(event.target.value)}
          className={classes.inputStyle}
          id="repeatPassword"
        />
        {!repeatedPasswordIsValid && <p>Password invalid</p>}
        <button>Create Account</button>
      </form>
    </Fragment>
  );
};

export default Register;
