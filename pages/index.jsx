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
      <ExampleText>{payload}</ExampleText>
    </>
  );
};

export default HomePage;
