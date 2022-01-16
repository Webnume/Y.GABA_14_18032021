const employeeListReducer = (employees = [], action) => {
  switch (action.type) {
    case "CREATE_EMPLOYEE":
      return [...employees, action.payload];
    default:
      return employees;
  }
};

export default employeeListReducer;
