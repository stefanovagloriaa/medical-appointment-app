import Head from "next/head";
import { Fragment } from "react";
import Register from "../components/Register";

const SignUpPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Register</title>
      </Head>
      <Register />
    </Fragment>
  );
};

export default SignUpPage;
