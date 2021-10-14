import axiosAPI from "../../API";
import store from "../../redux/store";

export function createJob(job) {
  axiosAPI.post("jobs", job).then((res) => getJobs());
}

export function getJobs() {
  axiosAPI
    .get("jobs")
    .then((res) =>
      store.dispatch({ type: "ADD_INITIAL_JOBS", payload: res.data })
    );
}
