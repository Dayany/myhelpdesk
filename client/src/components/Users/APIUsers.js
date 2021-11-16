import axiosAPI from "../../API";
import store from "../../redux/store";

export function createUser(user) {
  axiosAPI.post("users/register", user).then((res) => getUsers());
}

export function getUsers() {
  axiosAPI
    .get("users")
    .then((res) =>
      store.dispatch({ type: "ADD_INITIAL_USERS", payload: res.data })
    );
}
