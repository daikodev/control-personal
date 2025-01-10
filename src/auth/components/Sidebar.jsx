import React from "react";
import test from "../../assets/test.jpeg";

function Sidebar() {
  return (
    <div className="col-xl-8 d-none d-sm-inline d-sm-none d-xl-block">
      <img src={test} alt="..." className="img-fluid w-100 vh-100" />
    </div>
  );
}

export default Sidebar;
