export default function equipmentsReducer(state = { equipments: [] }, action) {
  switch (action.type) {
    case "ADD_INITIAL_EQUIPMENTS":
      return { equipments: [...action.payload] };
    default:
      return state;
  }
}
