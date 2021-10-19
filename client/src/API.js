import axios from "axios";

const axiosAPI = axios.create({
  baseURL: `${process.env.REACT_APP_API_SERVER}/api/`,
});

export default axiosAPI;
