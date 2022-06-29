import { SkillsList } from "../molecules/cardList";

import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.skills__title}>Mis Skills</h2>
      <SkillsList />
    </section>
  );
};

export default Skills;
