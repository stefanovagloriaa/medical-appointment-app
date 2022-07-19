import { Fragment } from "react";
import Head from "next/head";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Gallery</title>
      </Head>
      <Gallery />
    </Fragment>
  );
};

export default GalleryPage;
