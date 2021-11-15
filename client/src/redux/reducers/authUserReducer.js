export default function authUserReducer(
  state = {
    isLoggedIn: localStorage.getItem("isLoggedIn") ? true : false,
    currentUser: [],
    authToken: "",
  },
  action
) {
  switch (action.type) {
    case "LOGIN_USER":
      localStorage.setItem("token", action.payload.accessToken);
      localStorage.setItem("user", action.payload.user);
      localStorage.setItem("isLoggedIn", true);
      return {
        isLoggedIn: true,
        currentUser: action.payload.user,
        authToken: action.payload.accessToken,
      };
    case "LOGOUT_USER":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("isLoggedIn");
      return { isLoggedIn: false, currentUser: [], authToken: "" };
    default:
      return state;
  }
}
