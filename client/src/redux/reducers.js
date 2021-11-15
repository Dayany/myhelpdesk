import { combineReducers } from "redux";
import departmentsReducer from "./reducers/departmentsReducer";
import equipmentsReducer from "./reducers/equipmentsReducer";
import jobsReducer from "./reducers/jobsReducer";
import usersReducer from "./reducers/usersReducer";
import authUserReducer from "./reducers/authUserReducer";

export default combineReducers({
  departments: departmentsReducer,
  users: usersReducer,
  authUser: authUserReducer,
  equipments: equipmentsReducer,
  jobs: jobsReducer,
});
