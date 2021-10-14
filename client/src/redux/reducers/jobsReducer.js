export default function jobsReducer(state = { jobs: [] }, action) {
  switch (action.type) {
    case "ADD_INITIAL_JOBS":
      return { jobs: [...action.payload] };
    default:
      return state;
  }
}
