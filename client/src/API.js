import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "/api/",
});

// axiosAPI.interceptors.request.use((req) => {
//   if (localStorage.getItem("token")) {
//     req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//   }
// });

export default axiosAPI;
