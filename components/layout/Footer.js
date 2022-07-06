import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <h1>Footer</h1>
      <Link href="/services">
        <li>Услуги</li>
      </Link>
      <Link href="/gallery">
        <li>Галерия</li>
      </Link>
      <Link href="/contacts">
        <li>Контакти</li>
      </Link>
      <Link href="/login">
        <li>Вход</li>
      </Link>
      <Link href="/signUp">
        <li>Регистрирай се</li>
      </Link>
    </div>
  );
};

export default Footer;
