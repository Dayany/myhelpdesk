export default function departmentsReducer(
  state = { departments: [] },
  action
) {
  switch (action.type) {
    case "ADD_INITIAL_DEPARTMENTS":
      return { departments: [...action.payload] };
    default:
      return state;
  }
}
