import axiosAPI from "../../API";
import store from "../../redux/store";

export function validateLogin(loginInfo, history) {
  axiosAPI.post("users/login", loginInfo).then((res) => {
    store.dispatch({ type: "LOGIN_USER", payload: res.data });
  });
}

export function logout(history) {
  store.dispatch({ type: "LOGOUT_USER" });
  history.push("/");
}
