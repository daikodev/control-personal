import React from "react";
import CustomTable from "./components/Table";
import Navbar from "./components/Navbar";

function Dashboard() {
  return (
    <>
      <main>
        <Navbar></Navbar>
        <CustomTable></CustomTable>
      </main>
      ;
    </>
  );
}

export default Dashboard;
