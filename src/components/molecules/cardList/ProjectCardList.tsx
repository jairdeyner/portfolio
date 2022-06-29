import { ProjectCard } from "../card";

import { projects } from "../../../data";
import styles from "./ProjectCardList.module.scss";

export const ProjectCardList = () => {
  return (
    <ul className={styles.projectCardList}>
      {projects.map(project => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
};
