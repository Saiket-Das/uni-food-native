import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://192.168.10.56:5000",
});

export default apiClient;
