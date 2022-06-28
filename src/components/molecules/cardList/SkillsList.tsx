import { skills } from "../../../data";

import * as skillsImages from "../../../assets/images/skills";

export const SkillsList = () => {
  console.log(skills);

  return (
    <ul>
      {skills.map(({ id, name, img }) => (
        <li key={id}>
          <article>
            <p>{name}</p>
            <img src={skillsImages[img]} alt={name} />
          </article>
        </li>
      ))}
    </ul>
  );
};
