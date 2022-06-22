import { socialNetworks } from "../../data";
import Avatar from "../atoms/Avatar";
import Chip from "../atoms/Chip";
import Divider from "../atoms/Divider";
import Icon from "../atoms/Icon";
import { InformationCardList } from "../molecules/cardList";

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

      <InformationCardList />

      <Divider />

      <div className={styles.sidebar__socialIconsContainer}>
        {socialNetworks.map(s => (
          <div key={s.id} className={styles.sidebar__socialIconBox}>
            <Icon icon={s.icon} href={s.href} />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
