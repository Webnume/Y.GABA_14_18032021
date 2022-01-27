import React from "react";
import { useSelector } from "react-redux";
import { Table } from "react-redux-table";
import { Link } from "react-router-dom";

// import Datatable from "../pages/DataTable";

const headersArray = [
  { title: "First Name", category: "firstName" },
  { title: "Last Name", category: "lastName" },
  { title: "Start Date", category: "startDate" },
  { title: "Department", category: "department" },
  { title: "Date of Birth", category: "dateOfBirth" },
  { title: "Street", category: "street" },
  { title: "City", category: "city" },
  { title: "State", category: "state" },
  { title: "Zip Code", category: "zipCode" },
];
// const rowsArray = [
//   [
//     { cellValue: "Nicolas", category: "firstName" },
//     { cellValue: "Tesla", category: "lastName" },
//   ],
//   [
//     { cellValue: "Leonardo", category: "firstName" },
//     { cellValue: "Da Vinci", category: "lastName" },
//   ],
//   [
//     { cellValue: "Sherlock", category: "firstName" },
//     { cellValue: "Holmes", category: "lastName" },
//   ],
// ];

export default function EmployeeList() {
  const entriesSelector = [10, 25, 50, 100];

  const employees = useSelector((state) => state.employees);

  // const formatDataToTable = employees.map((employee) =>
  // );
  const rowsArray = [];
  // console.log(rowsArray);
  for (let i = 0; i < employees.length; i++) {
    const tab = [];
    Object.entries(employees[i]).forEach(([key, valeur]) =>
      tab.push({ cellValue: valeur || "", category: key })
    );
    rowsArray.push(tab);
    // console.log(rowsArray);
  }
  return (
    <div>
      {/* {formatDataToTable} */}
      <div>
        <div id="employee-div" className="container">
          <h1>Current Employees</h1>
          {/* <Datatable/> */}
          {console.log(rowsArray)}
          <Table
            headersArray={headersArray}
            rowsContent={rowsArray}
            title=""
            filter={true}
            entriesSelector={entriesSelector}
            showEntries={true}
            hideButtons={false}
          />
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
}
