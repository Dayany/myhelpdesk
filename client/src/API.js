import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "/api/",
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export default axiosAPI;
