import React from "react";
import { useRouter } from "next/router";

import NavLink from "../NavLink";
import routes from "./routes";
import styles from "./Header.module.css";
import useUser from "src/utils/lib/useUser";

const Header = () => {
  const router = useRouter();
  const { user } = useUser();
  return (
    <div className={styles.root}>
      {routes
        // show the routes which don't require auth
        // and the ones that require auth and being logged in
        .filter((route) => (user?.isLoggedIn && route.auth) || !route.auth)
        .map(({ name, link, atEnd }) => (
          <NavLink
            href={link}
            className={`
            ${atEnd ? styles.endRoute : styles.route} 
            ${router.pathname === link && styles.selected}
          `}
            key={name}
          >
            {name}
          </NavLink>
        ))}
    </div>
  );
};

export default Header;
