import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Styles/NavLink.module.css";

const NavLinks = ({ Link, children }) => {
  return (
    <li className={styles.NavList}>
      <NavLink to={Link} className={styles.NavLink}>
        {children}
      </NavLink>
    </li>
  );
};

export default NavLinks;
