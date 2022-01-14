import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { SWRConfig } from "swr";

import Header from "src/components/Header";
import fetchJson from "src/utils/lib/fetchJson";

import "focus-visible/dist/focus-visible.min.js";
import "normalize.css";
import "public/static/styles/App.css";

const MyApp = ({ Component, pageProps }) => (
  <SWRConfig
    value={{
      fetcher: fetchJson,
      onError: (e) => console.error(e),
    }}
  >
    <Head>
      <title>Next.js-Starter</title>
    </Head>
    <div className="App">
      <Header />
      <div className="Content">
        <Component {...pageProps} />
      </div>
    </div>
  </SWRConfig>
);

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
