import React from "react";
import "./App.css";
import "./CustomChakraStyles.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AuthLogin from "./auth/AuthLogin";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <div className="container-fluid p-0 vh-100">
        <Router>
          <Routes>
            <Route exact path="/" element={<AuthLogin />}></Route>
            <Route
              exact
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
