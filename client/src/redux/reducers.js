import { combineReducers } from "redux";
import departmentsReducer from "./reducers/departmentsReducer";
import usersReducer from "./reducers/usersReducer";

export default combineReducers({
  departments: departmentsReducer,
  users: usersReducer,
});
