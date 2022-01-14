import React from "react";
import PropTypes from "prop-types";
import SSRPage from "src/screens/SSR";
import { exampleServerCall } from "./api/example";
import { withSessionSsr } from "src/utils/lib/session";

const SSR = (props) => <SSRPage {...props} />;

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const props = {};
    const user = req.session.user;
    if (user) {
      props.user = user;
      // Additional api calls can be made to fetch more user related data in here.
    }
    const payload = await exampleServerCall();
    if (payload.success) props.message = payload.payload;
    else props.errorMessage = payload.errorMessage;
    return { props };
  }
);

SSR.propTypes = {
  message: PropTypes.string,
  errorMessage: PropTypes.string,
  user: PropTypes.object,
};

SSR.defaultProps = {
  message: null,
  errorMessage: null,
};

export default SSR;
