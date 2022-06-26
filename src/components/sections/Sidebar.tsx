import { useRef } from "react";

import { socialNetworks } from "../../data";
import Avatar from "../atoms/Avatar";
import Chip from "../atoms/Chip";
import Divider from "../atoms/Divider";
import Icon from "../atoms/Icon";
import IconButton from "../atoms/IconButton";
import { InformationCardList } from "../molecules/cardList";

import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const sidebarRef = useRef<HTMLElement>(null);

  const handleClick = () => {
    sidebarRef.current?.classList.toggle(styles["sidebar-active"]);
  };

  return (
    <aside ref={sidebarRef} className={styles.sidebar}>
      <div className={styles.sidebar__iconButtonBox}>
        <IconButton
          onClick={handleClick}
          icon="iconExpand"
          text="Mostrar Datos"
          size="small"
        />
      </div>

      <header className={styles.sidebar__header}>
        <Avatar />
        <div className={styles.sidebar__details}>
          <h1 className={styles.sidebar__title}>Jair Deyner</h1>
          <Chip />
        </div>
      </header>

      <div className={styles.sidebar__info}>
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
      </div>
    </aside>
  );
};

export default Sidebar;
