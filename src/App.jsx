import React from "react";
import "./App.css";
import "./CustomChakraStyles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLogin from "./auth/AuthLogin";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <div className="container-fluid p-0 vh-100">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<AuthLogin />}></Route>
            <Route
              exact
              path="Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
