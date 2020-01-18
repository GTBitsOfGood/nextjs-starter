import App from "next/app";
import React from "react";
import Head from "next/head";
import Header from "../client/components/Header";
import "../public/static/App.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
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
  }
}

export default MyApp;
