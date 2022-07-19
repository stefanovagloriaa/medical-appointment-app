import { Fragment } from "react";
import Head from "next/head";
import About from "../components/About";

const AboutPage = () => {
  return (
    <Fragment>
      <Head>
        <title>About</title>
      </Head>
      <About />
    </Fragment>
  );
};

export default AboutPage;
