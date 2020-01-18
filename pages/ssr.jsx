import React from "react";
import PropTypes from "prop-types";
import ExampleText from "../client/components/ExampleText";
import { helloWorld } from "../client/actions/api";

const SSRPage = ({ message, errorMessage }) => {
  return (
    <>
      <ExampleText>Welcome to Next.js!</ExampleText>
      <h2>This page is server-side rendered because it uses getInitialProps</h2>
      {errorMessage == null ? (
        <ExampleText>
          SSR Message:
          {message}
        </ExampleText>
      ) : (
        <ExampleText>
          SSR Error:
          {errorMessage}
        </ExampleText>
      )}
      <p>You can tell because the text above does not flash on refresh</p>
    </>
  );
};

SSRPage.getInitialProps = async () => {
  return helloWorld()
    .then(payload => {
      return {
        message: payload
      };
    })
    .catch(error => ({
      errorMessage: error.message
    }));
};

SSRPage.propTypes = {
  message: PropTypes.string,
  errorMessage: PropTypes.string
};

SSRPage.defaultProps = {
  message: null,
  errorMessage: null
};

export default SSRPage;
