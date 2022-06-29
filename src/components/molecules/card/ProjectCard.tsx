import { Project } from "../../../interfaces";
import * as projects from "../../../assets/images/projects";
import styles from "./ProjectCard.module.scss";

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
      <h3>{name}</h3>
      <div>
        {homepage && <button>homepage</button>}
        <button>repository</button>
      </div>
    </article>
  );
};
