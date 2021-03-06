import React from "react";
import "./assets/css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import Form from "./components/Form";
import logo from "./assets/images/logo.jpg"

function App() {
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
        <img src={logo} width="220px" alt="logo" />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />          
          <Route path="index.html" element={<Form />} />
          <Route path="employee-list" element={<EmployeeList />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 ! There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>

      {/* <Form /> */}
      {/* <Modal /> */}
      {/* <EmployeeList /> */}
    </div>
  );
}

export default App;
