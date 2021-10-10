import axiosAPI from "../../API";
import store from "../../redux/store";

export function createDepartment(department) {
  axiosAPI.post("departments", department).then((res) => getDepartments());
}

export function getDepartments() {
  axiosAPI
    .get("departments")
    .then((res) =>
      store.dispatch({ type: "ADD_INITIAL_DEPARTMENTS", payload: res.data })
    );
}
