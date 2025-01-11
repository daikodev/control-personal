import React from "react";
import CustomTable from "./components/Table";
import test from "../assets/test.jpeg";

function Dashboard() {
  return (
    <section className="row g-0 vh-100">
      <div className="col-xl-3 d-none d-sm-inline d-sm-none d-xl-block">
        <img src={test} alt="..." className="img-fluid w-100 vh-100" />
      </div>
      <div className="col-xl-9 justify-content-center align-items-start mt-5">
        <CustomTable></CustomTable>
      </div>
    </section>
  );

}

export default Dashboard;
