import { create } from "apisauce";
import setting from "../confiq/setting";

const apiClient = create({
  baseURL: setting.apiUrl,
});

export default apiClient;
