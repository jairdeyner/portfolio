import styles from "./Button.module.scss";

interface ButtonProps {
  type: "button" | "submit";
  value: string;
  href?: string;
  model: "primary" | "ghost";
  size: "medium" | "normal";
}

const Button = ({ type, value, href, model, size }: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${styles[`button-${model}`]} ${
        styles[`button-${size}`]
      }`}
      type={type}
    >
      {href ? (
        <a
          className={styles.button__anchor}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {value}
        </a>
      ) : (
        <span className={styles.button__text}>{value}</span>
      )}
    </button>
  );
};

export default Button;
