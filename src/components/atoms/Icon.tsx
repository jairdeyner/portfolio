import { Icons } from "../../interfaces";

import * as icons from "../../assets/icons";
import styles from "./Icon.module.scss";

interface IconProps {
  icon: Icons;
  size?: "small" | "medium";
  href?: string;
}

const Icon = ({ size = "medium", icon, href }: IconProps) => {
  return (
    <span className={`${styles.icon} ${styles[`icon-${size}`]}`}>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          <img
            src={icons[icon]}
            className={styles.icon__image}
            alt={`Icon ${icon}`}
          />
        </a>
      ) : (
        <img
          src={icons[icon]}
          className={styles.icon__image}
          alt={`Icon ${icon}`}
        />
      )}
    </span>
  );
};

export default Icon;
