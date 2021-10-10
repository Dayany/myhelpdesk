import axios from "axios";

const axiosAPI = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER,
});

export default axiosAPI;
