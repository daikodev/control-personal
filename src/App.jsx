import { useState } from "react";
import "./App.css";
import { HStack } from "@chakra-ui/react";
import { Button } from "@/core/ui/button";

function App() {
  return (
    <>
      <HStack>
        <Button>Click me</Button>
      </HStack>
    </>
  );
}

export default App;
