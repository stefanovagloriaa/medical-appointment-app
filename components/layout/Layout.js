import { Fragment } from "react";
import Navigation from "../Navigation";

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      <main>{props.children}</main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </Fragment>
  );
};

export default Layout;
