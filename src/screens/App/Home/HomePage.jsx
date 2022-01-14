import React from "react";
import { logout } from "src/actions/User";
import urls from "src/utils/urls";
import useUser from "src/utils/lib/useUser";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const { user: currentUser, mutateUser } = useUser({
    redirectIfFound: false,
    redirectTo: urls.pages.index,
  });

  const handleLogout = () =>
    mutateUser(
      logout().catch(() =>
        window.alert("An error occurred while trying to logout!")
      )
    );
  return (
    <div className={classes.root}>
      <h2 className={classes.centerText}>
        Welcome to our app, {currentUser?.username}!
      </h2>
      <h3>
        This page can only be accessed by logged-in users, because this page
        uses the useUser hook to redirect unauthed users away. Additionally, the
        login page uses the useUser hook to redirect authed users here.
      </h3>
      <button className={classes.bttn} type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default HomePage;
