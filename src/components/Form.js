import React from "react";
import { useForm } from "react-hook-form";
import { states } from "../utils/statesAbbreviationsData";

const Form = (props) => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  // watch input value by passing the name of it
  // console.log(watch("first-name"));
  const onSubmit = (data) => {
    console.log(data);
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const employee = data;
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    // $('#confirmation').modal();
  };
  return (
    <div className="container center">
      <a href="employee-list.html">View Current Employees</a>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)} id="create-employee">
        <div className="form-group row">
          <label htmlFor="first-name">First Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              id="first-name"
              defaultValue="testFirstName"
              {...register("first-name")}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="last-name">Last Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              id="last-name"
              defaultValue="testLastName"
              {...register("last-name")}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="date-of-birth">Date of Birth</label>
          <div className="col-sm-10">
            <input
              id="date-of-birth"
              type="date"
              defaultValue="2017-06-01"
              {...register("date-of-birth")}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="start-date">Start Date</label>
          <div className="col-sm-10">
            <input
              id="start-date"
              type="date"
              defaultValue="2017-06-01"
              {...register("start-date")}
            />
          </div>
        </div>

        <fieldset className="address">
          <legend>Address</legend>

          <div className="form-group row">
            <label htmlFor="street">Street</label>
            <div className="col-sm-10">
              <input
                id="street"
                type="text"
                defaultValue="street"
                {...register("street")}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="city">City</label>
            <div className="col-sm-10">
              <input
                id="city"
                type="text"
                defaultValue="city"
                {...register("city")}
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="state">State</label>
            <div className="col-sm-10">
              <select name="state" id="state" {...register("state")}>
                {states.map((state) => (
                  <option value={state.abbreviation} key={state.abbreviation}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="zip-code">Zip Code</label>
            <div className="col-sm-10">
              <input
                id="zip-code"
                type="number"
                defaultValue="00000"
                {...register("zip-code")}
              />
            </div>
          </div>
        </fieldset>

        <div className="form-group row">
          <label htmlFor="department">Department</label>
          <div className="col-sm-10">
            <select
              name="department"
              id="department"
              {...register("department")}
            >
              <option>Sales</option>
              <option>Marketing</option>
              <option>Engineering</option>
              <option>Human Resources</option>
              <option>Legal</option>
            </select>
          </div>
        </div><br />
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Form;
