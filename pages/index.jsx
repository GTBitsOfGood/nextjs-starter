import React from "react";
import ExampleText from "../client/components/ExampleText";
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
      <ExampleText>Welcome to Next.js!</ExampleText>
      <h2>
        This page is static rendered, because all API calls are made in
        useEffect
      </h2>
      <ExampleText>{payload}</ExampleText>
      <p>You can tell because the text above flashes on page refresh</p>
    </>
  );
};

export default HomePage;
