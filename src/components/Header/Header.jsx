import React from "react";
import Link from "next/link";
import routes from "../../../utils/routes";
import styles from "./Header.module.css";

const Header = () => (
  <div className={styles.root}>
    {routes.map(({ name, link }) => (
      <Link href={link} key={name}>
        <div className={styles.route}>{name}</div>
      </Link>
    ))}
  </div>
);

export default Header;
