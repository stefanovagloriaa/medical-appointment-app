import Image from "next/image";
import classes from "../components/About.module.css";

const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <h1>Георги Венелинов Николов</h1>
        <p>
          Для мене хірургія – це в першу чергу безпека для пацієнта. Моя
          практика базується на досвіді провідних європейський та вітчизняних
          судинних хірургів. Основні напрямки моєї роботи – лікування венозної,
          лімфатичної та артеріальної судинної патології найсучаснішими
          мініінвазивними методиками (безопераційне лікування варикозу,
          мікросклеротерапія, foam-form склеротерапія, мініфлебектомія,
          венектомія, ендовенозна лазерна коагуляція, радіочастотна абляція вен,
          лікування варикозу біоклеєм, лікування мальформацій, лімфедеми,
          відновлювальні операції з приводу артеріальної недостатності,
          рекомендації з приводу реабілітації). Навчання з судинної хірургії
          проходив в провідних клініках України, Німеччини, Австрії, Румунії.
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
