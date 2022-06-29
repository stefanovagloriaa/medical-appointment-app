import { Fragment } from "react";
import Link from "next/link";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <Fragment>
      <div className={classes.topnav}>
        <Link href="/">
          <li>Начало</li>
        </Link>
        <Link href="/services">
          <li>Услуги</li>
        </Link>
        <Link href="/gallery">
          <li>Галерия</li>
        </Link>
        <Link href="/about">
          <li>Вашият лекар</li>
        </Link>
        <Link href="/contacts">
          <li>Контакти</li>
        </Link>
        <Link href="/login">
          <li>Вход</li>
        </Link>
        <button className={classes.buttonStyle}>Запази час</button>
      </div>
    </Fragment>
  );
};

export default MainNavigation;
