
import React from "react";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

const AppBar = () => {
  return (
    <header
        className={styles.appBar}
    >
      <nav
        className={styles.nav}
      >
        <ul>
            <NavLink to="/" end={true} className={({isActive}) => isActive ? styles.active : null } >
                <li>Home</li>
            </NavLink>
            <NavLink to="/about"  className={({isActive} ) => isActive ? styles.active : null } >
                <li>About</li>
            </NavLink>
            <NavLink to="/projects"  className={({isActive} ) => isActive ? styles.active : null } >
                <li> Projects </li>
            </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default AppBar;
