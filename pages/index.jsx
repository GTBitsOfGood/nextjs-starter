import React from "react";
import { helloWorld } from "../client/actions/api";

const HomePage = () => {
  const [payload, setPayload] = React.useState("");

  React.useEffect(() => {
    // Example how to create page without ssr
    helloWorld().then(resp => {
      setPayload(resp);
    });
  }, []);

  return (
    <>
      <h2>Welcome to Next.js!</h2>
      <h3>
        This page is static rendered, because all API calls are made in
        useEffect
      </h3>
      <h4>{payload}</h4>
      <p>You can tell because the text above flashes on page refresh</p>
    </>
  );
};

export default HomePage;
