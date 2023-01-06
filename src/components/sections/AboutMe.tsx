import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <Heading text="Sobre Mí" />
      <div className={styles.aboutMe__content}>
        <p className={styles.aboutMe__text}>
          Hola soy Jair apasionado por el desarrollo web y el aprendizaje, con
          conocimientos en backend y frontend, últimamente trabajando más en el
          desarrollo frontend y actualmente me capacito en plataformas de
          educación en línea.
        </p>
        <p className={styles.aboutMe__text}>
          Mi alta curiosidad me permite aprender fácilmente nuevas tecnologías y
          herramientas, disfruto en compartir mis conocimientos ayudando a otros
          cuando es posible, ya que es una buena forma de apoyar a los demás y
          me permite aprender más sobre la tecnología que estoy enseñando.
        </p>
      </div>

      <Button
        type="button"
        model="ghost"
        size="normal"
        value="Descargar CV"
        href="./CV_JairTelloVargas.pdf"
      />
    </section>
  );
};

export default AboutMe;
