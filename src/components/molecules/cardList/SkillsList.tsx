import { SkillCard } from "../card";

import { skills } from "../../../data";
import styles from "./SkillsList.module.scss";

export const SkillsList = () => {
  return (
    <ul className={styles.skillsList}>
      {skills.map(skill => (
        <li key={skill.id}>
          <SkillCard skill={skill} />
        </li>
      ))}
    </ul>
  );
};
