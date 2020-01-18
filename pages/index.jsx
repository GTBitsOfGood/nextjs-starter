import React from "react";
import ExampleText from "../client/components/ExampleText";
import { exampleAction } from "../server/example/actions/example";

const HomePage = () => {
  const [payload, setPayload] = React.useState("");

  React.useEffect(() => {
    // Example how to create page without ssr
    exampleAction().then(resp => {
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
