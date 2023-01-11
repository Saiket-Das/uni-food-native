import { create } from "apisauce";
import setting from "../config/setting";

const apiClient = create({
  baseURL: setting.apiUrl,
});

export default apiClient;
