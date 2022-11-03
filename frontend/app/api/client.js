import { create } from "apisauce";
import setting from "../confiq/setting";

const apiClient = create({
  baseURL: setting.apiUrl,
});

console.log("apiClient", apiClient);

export default apiClient;
