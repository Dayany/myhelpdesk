import axiosAPI from "../../API";
import store from "../../redux/store";

export function createEquipments(equipment) {
  axiosAPI.post("equipments", equipment).then((res) => getEquipments());
}

export function getEquipments() {
  axiosAPI
    .get("equipments")
    .then((res) =>
      store.dispatch({ type: "ADD_INITIAL_EQUIPMENTS", payload: res.data })
    );
}
