import { Fragment } from "react";
import Head from "next/head";
import AppointmentModal from "../components/AppointmentModal";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Home Page</h1>
      <AppointmentModal />
    </Fragment>
  );
};

export default HomePage;
