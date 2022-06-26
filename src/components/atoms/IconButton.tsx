import { Icons } from "../../interfaces";
import Icon from "./Icon";

import styles from "./IconButton.module.scss";

interface IconButtonProps {
  icon: Icons;
  size?: "medium" | "small";
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const IconButton = ({
  icon,
  size = "medium",
  text,
  onClick,
}: IconButtonProps) => {
  return (
    <button onClick={onClick} className={styles.iconButton}>
      <div className={styles.iconButton__iconBox}>
        <Icon icon={icon} size={size} />
      </div>

      <span className={styles.iconButton__text}>{text}</span>
    </button>
  );
};

export default IconButton;
