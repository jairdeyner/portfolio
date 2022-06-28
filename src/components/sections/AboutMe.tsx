import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <Heading text="Sobre Mí" />
      <div className={styles.aboutMe__content}>
        <p className={styles.aboutMe__text}>
          Hola soy Jair apasionado por el desarrollo web y el aprendizaje,
          actualmente estudio en el instituto Idat la carrera Desarrollo de
          Sistemas de Información (5° ciclo) y en plataformas de educación en
          línea.
        </p>
        <p className={styles.aboutMe__text}>
          Mi alta curiosidad me permite aprender fácilmente nuevas tecnologías y
          herramientas, y disfruto en compartir mis conocimientos ayudando a
          otros cuando es posible, ya que es una buena forma de apoyar a los
          demás y te permite aprender más sobre la tecnología que se está
          enseñando.
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
