import AboutMe from "../components/sections/AboutMe";
import Skills from "../components/sections/Skills";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <AboutMe />
      <Skills />
    </div>
  );
};

export default Home;
