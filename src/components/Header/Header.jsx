import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import NavLink from "../NavLink";
import routes from "./routes";
import styles from "./Header.module.css";

const Header = ({ loggedIn, currentRoute }) => (
  <div className={styles.root}>
    {routes
      // show the routes which don't require auth
      // and the ones that require auth and being logged in
      .filter((route) => (loggedIn && route.auth) || !route.auth)
      .map(({ name, link, atEnd }) => (
        <NavLink
          href={link}
          className={clsx(
            atEnd ? styles.endRoute : styles.route,
            currentRoute === link && styles.selected
          )}
          key={name}
        >
          {name}
        </NavLink>
      ))}
  </div>
);

Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  currentRoute: PropTypes.string.isRequired,
};

export default Header;
