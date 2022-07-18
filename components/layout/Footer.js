import Link from "next/link";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div>
        <b>Контакти</b>
        <p>кв.Ветрен ул.Александър Стамболийски</p>
        <p>md.nikolov91@gmail.com</p>
        <p>+359 78 1000 99</p>
      </div>
      <div>
        <b>Работен график</b>
        <p>Понеделник - Петък 07:00 - 16:00</p>
        <p>Събота и Неделя - почивни дни</p>
      </div>
      <div className={classes.services}>
        <b>Услуги</b>
        <Link href={"/services/62a2c8cc7a44c8a2e63d5c05"}>
          <li>Артериални процедури</li>
        </Link>
        <Link href={"/services/62a2c91a7a44c8a2e63d5c06"}>
          <li>Венозни процедури</li>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
