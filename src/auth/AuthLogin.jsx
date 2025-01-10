import React from "react";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";

function AuthLogin() {
  return (
    <section className="row g-0 vh-100">
      <Sidebar></Sidebar>
      <Form></Form>
    </section>
  );
}

export default AuthLogin;
