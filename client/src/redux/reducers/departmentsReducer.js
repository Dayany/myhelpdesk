export default function departmentsReducer(
  state = { departments: [] },
  action
) {
  switch (action.type) {
    case "ADD_INITIAL_DEPARTMENTS":
      return { departments: [...action.payload] };
    case "ADD_DEPARTMENT":
      return { departments: [...state.departments, action.payload] };
    default:
      return state;
  }
}
