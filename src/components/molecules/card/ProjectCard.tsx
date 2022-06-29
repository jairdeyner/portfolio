import { Project } from "../../../interfaces";
import * as projects from "../../../assets/images/projects";
import styles from "./ProjectCard.module.scss";
import Button from "../../atoms/Button";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { img, name, repository, homepage } = project;

  return (
    <article className={styles.projectCard}>
      <div className={styles.projectCard__thumbnail}>
        <img
          className={styles.projectCard__img}
          src={projects[img]}
          alt={`${name} screenshot`}
        />
      </div>
      <h3 className={styles.projectCard__title}>{name}</h3>
      <div className={styles.projectCard__buttonsBox}>
        {homepage && (
          <Button
            model="primary"
            size="medium"
            type="button"
            value="Ver Página"
            href={homepage}
          />
        )}
        <Button
          model="ghost"
          size="medium"
          type="button"
          value="GitHub"
          href={repository}
        />
      </div>
    </article>
  );
};
