// import logo from './logo.svg';
import React from "react";
import "./assets/css/app.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import EmployeeList from "./components/EmployeeList";
import Form from "./components/Form";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <Form />
      {/* <Modal /> */}
      <EmployeeList />
    </div>
  );
}

export default App;
