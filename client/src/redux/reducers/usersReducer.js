export default function usersReducer(state = { users: [] }, action) {
  switch (action.type) {
    case "ADD_INITIAL_USERS":
      return { users: [...action.payload] };
    case "ADD_USER":
      return { users: [...state.users, action.payload] };
    default:
      return state;
  }
}
