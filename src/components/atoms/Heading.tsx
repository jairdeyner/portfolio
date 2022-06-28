import styles from "./Heading.module.scss";

interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => {
  return (
    <header className={styles.heading}>
      <h2 className={styles.heading__title}>{text}</h2>
    </header>
  );
};

export default Heading;
