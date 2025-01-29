import React from "react";
import test from "../../assets/test.jpeg";
import banner from "../../assets/banner.jpg";

function Sidebar() {
  return (
    <div className="col-xl-8 d-none d-sm-inline d-sm-none d-xl-block">
      <img src={banner} alt="..." className="img-fluid w-100 vh-100" />
    </div>
  );
}

export default Sidebar;
