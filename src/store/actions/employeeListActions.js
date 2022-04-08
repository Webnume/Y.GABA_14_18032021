const employeeListActions = (data) => {
  return (dispatch) => {
    dispatch({
      type: "CREATE_EMPLOYEE",
      payload: data
    });
  };
};
export default employeeListActions;
