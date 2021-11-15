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

export function validateLogin(loginInfo, history) {
  axiosAPI.post("users/login", loginInfo).then((res) => {
    store.dispatch({ type: "LOGIN_USER", payload: res.data });
  });
}

export function logout(history) {
  store.dispatch({ type: "LOGOUT_USER" });
  history.push("/");
}
