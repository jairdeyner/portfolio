import { NavLink } from "react-router-dom";

import { routes } from "../../routers/routes";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__list}>
        {routes.map(route => (
          <li className={styles.navbar__item} key={route.path}>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.navbar__linkActive : ""
              }
              to={route.to}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
