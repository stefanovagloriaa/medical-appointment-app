import Image from "next/image";
import classes from "../components/About.module.css";

const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>Георги Венелинов Николов</h1>
        <p>
          Д-р Николов е получил медицинското си образование в Медицински
          университет- Плевен. Има издадена правоспособност да извършва
          диагностични и терапевтични дейности под рентгенов контрол от
          Военномедицинска академия.
        </p>
      </div>
      <div className={classes.imageContainer}>
        <section>
          <Image
            src="/../public/doctorImage.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </section>
        <section>
          <li>facebook</li>
          <li>instagram</li>
          <li>youtube</li>
          <li>md.nikolov91@gmail.com</li>
          <li>+359 78 1000 99</li>
        </section>
      </div>
    </div>
  );
};

export default About;
