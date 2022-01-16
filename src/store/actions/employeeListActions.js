const employeeListActions = (data) => {
  // console.log("Action", data);
  return (dispatch) => {
    dispatch({
      type: "CREATE_EMPLOYEE",
      payload: data
    });
  };
};
export default employeeListActions;
