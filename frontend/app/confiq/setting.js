import Constants from "expo-constants";

const setting = {
  dev: {
    // apiUrl: "http://localhost:5000",
    // apiUrl: "http://192.168.10.154:5000",
    // apiUrl: "http://192.168.10.56:5000",
    apiUrl: "http://192.168.10.108:5000",

  },

  staging: {
    // apiUrl: "http://localhost:5000",
    // apiUrl: "http://192.168.10.154:5000",
    // apiUrl: "http://192.168.10.56:5000",
    apiUrl: "http://192.168.10.108:5000",
  },

  prod: {
    // apiUrl: "http://localhost:5000",
    // apiUrl: "http://192.168.10.154:5000",
    // apiUrl: "http://192.168.10.56:5000",
    apiUrl: "http://192.168.10.108:5000",

  },
};

const getCurrentSetting = () => {
  if (__DEV__) return setting.dev;
  if (Constants.manifest.releaseChannel === "staging") return setting.staging;
  return setting.prod;
};

export default getCurrentSetting();
