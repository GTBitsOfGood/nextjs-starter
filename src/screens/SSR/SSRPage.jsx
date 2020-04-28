import React from "react";
import PropTypes from "prop-types";
import { helloWorld } from "../../actions/General";
import classes from "./SSRPage.module.css";

const SSRPage = ({ message, errorMessage }) => {
  return (
    <>
      <h2 className={classes.CenterText}>Welcome to Next.js!</h2>
      <h3>
        This page is server-side rendered, because all API calls are made in
        getInitialProps
      </h3>
      {errorMessage == null ? (
        <h4>SSR Message: {message}</h4>
      ) : (
        <h4>SSR Error: {errorMessage}</h4>
      )}
      <p>You can tell because the text above does not flash on refresh</p>
    </>
  );
};

SSRPage.getInitialProps = async () => {
  return helloWorld()
    .then((payload) => {
      return {
        message: payload,
      };
    })
    .catch((error) => ({
      errorMessage: error.message,
    }));
};

SSRPage.propTypes = {
  message: PropTypes.string,
  errorMessage: PropTypes.string,
};

SSRPage.defaultProps = {
  message: null,
  errorMessage: null,
};

export default SSRPage;
