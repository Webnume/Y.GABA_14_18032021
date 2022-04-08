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
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const options = [];
  states.forEach((row) => {
    return options.push({ value: row.abbreviation, label: row.name });
  });

  const [showModal, setShowModal] = useState(false);
  const onSubmit = (data) => {
    const newData = { ...data };
    newData.state = data.state ? data.state.value : null;
    newData.dateOfBirth = data.dateOfBirth
      ? data.dateOfBirth.toLocaleDateString()
      : 0;
    newData.startDate = data.startDate
      ? data.startDate.toLocaleDateString()
      : 0;
    dispatch(employeeListActions(newData));
    setShowModal(true);
  };

  return (
    <div className="containerForm center">
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <p>Employee Created!</p>
      </Modal>
      <Link to="/employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit(onSubmit)} id="create-employee">
        <div className="left">
          <div className="form-group row">
            <label htmlFor="firstName">First Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                id="firstName"
                // defaultValue="testFirstName"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="error">This field is required</span>
              )}
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="lastName">Last Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                id="lastName"
                // defaultValue="testLastName"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className="error">This field is required</span>
              )}
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="dateOfBirth">Date of Birth</label>
          </div>
          <Controller
            control={control}
            name="dateOfBirth"
            rules={{ required: true }}
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
          {errors.dateOfBirth && (
            <span className="error">This field is required</span>
          )}

          <div className="form-group row">
            <label htmlFor="startDate">Start Date</label>
            <div className="col-sm-10"></div>
          </div>
          <Controller
            control={control}
            name="startDate"
            rules={{ required: true }}
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
          {errors.startDate && (
            <span className="error">This field is required</span>
          )}

          <div className="form-group row">
            <label htmlFor="department">Department</label>
            <div className="col-sm-10">
              <select
                name="department"
                id="department"
                {...register("department", { required: true })}
              >
                {errors.department && (
                  <span className="error">This field is required</span>
                )}
                <option>Sales</option>
                <option>Marketing</option>
                <option>Engineering</option>
                <option>Human Resources</option>
                <option>Legal</option>
              </select>
            </div>
          </div>
        </div>
        <div className="right">
          <fieldset className="form-group border p-3 mt-4 mb-4">
            <legend className="w-auto px-2">Address</legend>

            <div className="form-group row">
              <label htmlFor="street">Street</label>
              <div className="col-sm-10">
                <input
                  id="street"
                  type="text"
                  // defaultValue="street"
                  {...register("street", { required: true })}
                />
                {errors.street && (
                  <span className="error">This field is required</span>
                )}
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="city">City</label>
              <div className="col-sm-10">
                <input
                  id="city"
                  type="text"
                  // defaultValue="city"
                  {...register("city", { required: true })}
                />
                {errors.city && (
                  <span className="error">This field is required</span>
                )}
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="state">State</label>
              <div className="col-sm-10"></div>
            </div>
            <Controller
              control={control}
              name="state"
              rules={{ required: true }}
              render={({ field: { onChange } }) => (
                <Select onChange={onChange} options={options} />
              )}
            />
            {errors.state && (
              <span className="error">This field is required</span>
            )}
            <div className="form-group row">
              <label htmlFor="zipCode">Zip Code</label>
              <div className="col-sm-10">
                <input
                  id="zipCode"
                  type="number"
                  // defaultValue="00000"
                  {...register("zipCode", { required: true })}
                />
                {errors.zipCode && (
                  <span className="error">This field is required</span>
                )}
              </div>
            </div>
          </fieldset>
        </div>

        <input type="submit" value="Save" className="btn btn-primary m-4" />
      </form>
    </div>
  );
};

export default Form;
