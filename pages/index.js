import { Fragment } from "react";
import Head from "next/head";
import Modal from "../components/Modal";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Home Page</h1>
      <Modal></Modal>
    </Fragment>
  );
};

export default HomePage;
