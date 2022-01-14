import React from "react";
import PropTypes from "prop-types";
import classes from "./SSRPage.module.css";

const SSRPage = ({ message, errorMessage, user }) => {
  return (
    <>
      <h2 className={classes.centerText}>Welcome to Bits of Good!</h2>
      <h3>
        This page is server-side rendered, because all API calls are made in the
        SSR page as getServerSideProps and passed into the SSR screen.
      </h3>
      {errorMessage == null ? (
        <h4>SSR Message: {message}</h4>
      ) : (
        <h4>SSR Error: {errorMessage}</h4>
      )}
      <p>You can tell because the text above does not flash on refresh</p>
      <p>
        I can also fetch user state on the server. I am currently{" "}
        {!user.isLoggedIn && "not"} logged in{" "}
        {user.isLoggedIn && "as user with id " + user.id + "."}
      </p>
    </>
  );
};

SSRPage.propTypes = {
  message: PropTypes.string,
  errorMessage: PropTypes.string,
  user: PropTypes.object,
};

SSRPage.defaultProps = {
  message: null,
  errorMessage: null,
  user: {},
};

export default SSRPage;
