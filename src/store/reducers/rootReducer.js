import { combineReducers } from 'redux';
import employeeListReducer from './employeeListReducer';
import { rrtableReducer } from "react-redux-table";

const rootReducer = combineReducers({ 
    employees: employeeListReducer,
    rrtable: rrtableReducer
})

export default rootReducer;