import apisauce from "apisauce";

const apiClient = apisauce.create({
  baseURL: "http://192.168.10.56:5000",
});

export default apiClient;
