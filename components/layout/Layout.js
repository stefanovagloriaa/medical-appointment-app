import { Fragment } from "react";
import Navigation from "../Navigation";
import Footer from "./Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <div className={classes.background}>
        <Navigation />
        <main>{props.children}</main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
