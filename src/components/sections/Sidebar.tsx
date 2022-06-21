import Avatar from "../atoms/Avatar";
import Chip from "../atoms/Chip";
import Divider from "../atoms/Divider";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.sidebar__header}>
        <Avatar />
        <div className={styles.sidebar__details}>
          <h1 className={styles.sidebar__title}>Jair Deyner</h1>
          <Chip />
        </div>
      </header>
      <Divider />
      {/* InformationCardList: Molecules */}
    </aside>
  );
};

export default Sidebar;
