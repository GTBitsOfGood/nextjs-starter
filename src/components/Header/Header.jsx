import React from "react";
import NavLink from "../NavLink";
import routes from "./routes";
import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.root}>
    {routes.map(({ name, link }) => (
      <NavLink href={link} key={name}>
        <div className={styles.route}>{name}</div>
      </NavLink>
    ))}
  </div>
);

export default Header;
