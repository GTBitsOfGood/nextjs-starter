import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import "../../public/static/App.css";

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Nextjs-Starter</title>
    </Head>
    <div className="App">
      <Header />
      <div className="Content">
        <Component {...pageProps} />
      </div>
    </div>
  </>
);

export default MyApp;
