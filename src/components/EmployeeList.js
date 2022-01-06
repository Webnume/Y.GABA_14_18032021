import React from "react";
import Datatable from "../pages/DataTable";

export default function EmployeeList() {



  return (
    <div>
      <div>
        <div id="employee-div" className="container">
          <h1>Current Employees</h1>
          <Datatable/>
          <a href="index.html">Home</a>
        </div>
      </div>
    </div>
  );
}
