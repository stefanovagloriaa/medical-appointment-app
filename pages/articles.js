import Articles from "../components/Articles";
import Head from "next/head";
import { Fragment } from "react";

const ContactsPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contacts</title>
      </Head>
      <Articles />
    </Fragment>
  );
};

export default ContactsPage;
