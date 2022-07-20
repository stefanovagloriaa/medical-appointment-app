import { Fragment } from "react";
import Head from "next/head";
import AppointmentModal from "../components/AppointmentModal";
import Home from "../components/Home";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
      </Head>
      <Home />
    </Fragment>
  );
};

export default HomePage;
