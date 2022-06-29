import classes from "./AddressNavigation.module.css";

const AddressNavigation = () => {
  return (
    <div className={classes.element}>
      <span>
        Александър Велики 41, <b>гр.Бургас</b>
      </span>
      <span>md.nikolov91@gmail.com</span>
      <span>+359 78 1000 99</span>
    </div>
  );
};

export default AddressNavigation;
