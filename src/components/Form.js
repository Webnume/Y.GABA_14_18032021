import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { states } from "../utils/statesAbbreviationsData";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import employeeListActions from "../store/actions/employeeListActions";
import { Modal } from "webnum-modal-react";

const Form = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, control } = useForm();
  const options = [];
  states.map((row) => {
    options.push({ value: row.abbreviation, label: row.name });
  });
  // console.log(options);

  const [show, setShow] = useState(false);
  const onSubmit = (data) => {
    // const dataFormat = data.state && { ...data, state: data.state.label };
    // const newData ={
    //   city: "city"
    //   dateOfBirth: undefined
    //   department: "Sales"
    //   firstName: "testFirstName"
    //   lastName: "testLastName"
    //   startDate: undefined
    //   state: "American Samoa"
    //   street: "street"
    //   zipCode: "00000"
    //   }
    const newData = { ...data };
    newData.state = data.state ? data.state.value : null;
    newData.dateOfBirth = data.dateOfBirth
      ? data.dateOfBirth.toLocaleDateString()
      : 0;
    newData.startDate = data.startDate
      ? data.startDate.toLocaleDateString()
      : 0;

    // console.log(data);
    // console.log(newData);
    dispatch(employeeListActions(newData));
    // const employees = JSON.parse(localStorage.getItem("employees")) || [];
    // const employee = data;
    // employees.push(employee);
    // localStorage.setItem("employees", JSON.stringify(employees));
    // $('#confirmation').modal();
    setShow(true);
  };

  return (
    <div className="container center">
      <Modal onClose={() => setShow(false)} show={show}>
        <p>Employee Created!</p>
      </Modal>
      <Link to="/employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)} id="create-employee">
        <div className="form-group row">
          <label htmlFor="firstName">First Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              id="firstName"
              defaultValue="testFirstName"
              {...register("firstName")}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastName">Last Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              id="lastName"
              defaultValue="testLastName"
              {...register("lastName")}
            />
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="dateOfBirth">Date of Birth</label>
        </div>
        <Controller
          control={control}
          name="dateOfBirth"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <ReactDatePicker
              id="dateOfBirth"
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
              // dateFormat="dd/MM/yyyy"
            />
          )}
        />

        <div className="form-group row">
          <label htmlFor="startDate">Start Date</label>
          <div className="col-sm-10"></div>
        </div>
        <Controller
          control={control}
          name="startDate"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <ReactDatePicker
              id="startDate"
              onChange={onChange}
              onBlur={onBlur}
              selected={value}
              // dateFormat="dd/MM/yyyy"
            />
          )}
        />

        <fieldset className="form-group border p-3 mt-4 mb-4">
          <legend className="w-auto px-2">Address</legend>

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
            <div className="col-sm-10"></div>
          </div>
          <Controller
            control={control}
            name="state"
            render={({ field: { onChange } }) => (
              <Select onChange={onChange} options={options} />
            )}
          />

          <div className="form-group row">
            <label htmlFor="zipCode">Zip Code</label>
            <div className="col-sm-10">
              <input
                id="zipCode"
                type="number"
                defaultValue="00000"
                {...register("zipCode")}
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
        </div>
        <input type="submit" value="Save" className="btn btn-primary m-4" />
      </form>
    </div>
  );
};

export default Form;
