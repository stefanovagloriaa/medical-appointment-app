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

    let usernameURI = encodeURIComponent(username);
    let passwordURI = encodeURIComponent(password);

    let uri = `https://parseapi.back4app.com/login?username=${usernameURI}&password=${passwordURI}`;

    const response = await fetch(uri, {
      method: "GET",
      headers: {
        "X-Parse-Application-Id": "1F0sC9aHng1diauZUXZJi5KZXgg4TvPIr1o9zuA6",
        "X-Parse-REST-API-Key": "7a1wvIl5jog3wuV6ssPXYSHHtSzibhlKsJ3oKIQO",
        "X-Parse-Revocable-Session": 1,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);

      localStorage.setItem("objectId", data.objectId);
      localStorage.setItem("username", data.username);
      localStorage.setItem("sessionToken", data.sessionToken);

      dispatch(authActions.login());
      router.push("/");
    }
  };

  return (
    <Fragment>
      <form onSubmit={formSubmitHandler} className={classes.container}>
        <div>
          <label className={classes.labelStyle} htmlFor="username">
            Username
          </label>
          <input
            ref={usernameRef}
            className={classes.inputStyle}
            id="username"
          />
        </div>
        <div>
          <label className={classes.labelStyle} htmlFor="password">
            Password
          </label>
          <input
            ref={passwordRef}
            className={classes.inputStyle}
            id="password"
          />
        </div>
        <div>
          <button>LogIn</button>
          <Link href="/signUp">
            <button>You have not account yet?</button>
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
