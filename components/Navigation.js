import { Fragment } from "react";
import AddressNavigation from "./AddressNavigation";
import MainNavigation from "./MainNavigation";

const Navigation = () => {
  return (
    <Fragment>
      <AddressNavigation />
      <MainNavigation />
    </Fragment>
  );
};

export default Navigation;
