import Contacts from "../components/Contacts";
import Head from "next/head";
import { Fragment } from "react";

const ContactsPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contacts</title>
      </Head>
      <Contacts />
    </Fragment>
  );
};

export default ContactsPage;
