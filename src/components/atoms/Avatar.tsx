import ImageAvatar from "../../assets/images/avatar.png";
import styles from "./Avatar.module.scss";

const Avatar = () => {
  return (
    <div className={styles.avatar}>
      <img
        className={styles.avatar__image}
        src={ImageAvatar}
        alt="Avatar de Jair"
      />
    </div>
  );
};

export default Avatar;
