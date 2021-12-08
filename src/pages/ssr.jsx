import React from "react";
import SSRPage from "../screens/SSR";
import PropTypes from "prop-types";
import { exampleServerCall } from "./api/example";

const SSR = (props) => <SSRPage {...props} />;

export async function getServerSideProps() {
  const payload = await exampleServerCall();
  const props = {};
  if (payload.success) props.message = payload.payload;
  else props.errorMessage = payload.errorMessage;
  return { props };
}

SSR.propTypes = {
  message: PropTypes.string,
  errorMessage: PropTypes.string,
};

SSR.defaultProps = {
  message: null,
  errorMessage: null,
};

export default SSR;
