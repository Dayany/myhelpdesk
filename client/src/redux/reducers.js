import { combineReducers } from "redux";
import departmentsReducer from "./reducers/departmentsReducer";
import equipmentsReducer from "./reducers/equipmentsReducer";
import jobsReducer from "./reducers/jobsReducer";
import usersReducer from "./reducers/usersReducer";

export default combineReducers({
  departments: departmentsReducer,
  users: usersReducer,
  equipments: equipmentsReducer,
  jobs: jobsReducer,
});
