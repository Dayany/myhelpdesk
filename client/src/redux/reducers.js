import { combineReducers } from "redux";
import departmentsReducer from "./reducers/departmentsReducer";
import equipmentsReducer from "./reducers/equipmentsReducer";
import usersReducer from "./reducers/usersReducer";

export default combineReducers({
  departments: departmentsReducer,
  users: usersReducer,
  equipments: equipmentsReducer,
});
