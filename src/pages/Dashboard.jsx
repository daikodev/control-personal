import React from "react";
import Panel from "./components/Panel";
import Navbar from "./components/Navbar";

function Dashboard() {
  return (
    <>
      <main>
        <Navbar></Navbar>
        <Panel></Panel>
      </main>
    </>
  );
}

export default Dashboard;
