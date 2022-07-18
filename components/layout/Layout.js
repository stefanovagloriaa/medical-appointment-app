import { Fragment } from "react";
import Navigation from "../Navigation";
import Footer from "./Footer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.background}>
      <div>
        <Navigation />
        <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
