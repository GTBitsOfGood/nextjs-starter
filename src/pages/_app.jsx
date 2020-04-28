import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Header from "../components/Header";
import "../../public/static/App.css";

const MyApp = ({ Component, pageProps, router }) => (
  <>
    <Head>
      <title>Nextjs-Starter</title>
    </Head>
    <div className="App">
      <Header loggedIn={false} currentRoute={router.asPath} />
      <div className="Content">
        <Component {...pageProps} />
      </div>
    </div>
  </>
);

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};

export default MyApp;
