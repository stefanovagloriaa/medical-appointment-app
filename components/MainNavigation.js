import { Fragment, useState } from "react";
import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import { useSelector } from "react-redux";

const MainNavigation = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const dispatch = useDispatch();

  const logoutHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.logout());
  };

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
        {isAuth && (
          <Link href="/logout">
            <li onClick={logoutHandler}>Изход</li>
          </Link>
        )}
      </div>
    </Fragment>
  );
};

export default MainNavigation;
