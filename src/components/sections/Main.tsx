import AppRouter from "../../routers/AppRouter";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.main}>
      <AppRouter />
    </div>
  );
};

export default Main;
