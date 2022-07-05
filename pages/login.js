import { Fragment } from "react";
import Login from "../components/Login";
import Head from "next/head";

const LoginPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Login</title>
      </Head>
      <Login />
    </Fragment>
  );
};

export default LoginPage;
