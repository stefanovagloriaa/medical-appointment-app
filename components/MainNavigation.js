import { Fragment, useState } from "react";
import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { useSelector } from "react-redux";
import Modal from "./Modal";

const MainNavigation = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

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
        {!isAuth && (
          <Link href="/login">
            <li>Вход</li>
          </Link>
        )}
      </div>
    </Fragment>
  );
};

export default MainNavigation;
