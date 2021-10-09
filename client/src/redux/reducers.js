import { combineReducers } from "redux";
import departmentsReducer from "./reducers/departmentsReducer";

export default combineReducers({
  departments: departmentsReducer,
});
