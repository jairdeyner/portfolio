import { Skill } from "../../../interfaces";
import * as skillsImages from "../../../assets/images/skills";
import styles from "./SkillCard.module.scss";

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
  const { img, name } = skill;

  return (
    <article className={styles.skillCard}>
      <img
        className={styles.skillCard__image}
        src={skillsImages[img]}
        alt={name}
      />
      <p className={styles.skillCard__text}>{name}</p>
    </article>
  );
};
