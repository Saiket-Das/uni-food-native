import Constants from "expo-constants";

const setting = {
  dev: {
    apiUrl: "http://localhost:5000//api",
    // apiUrl: "http://192.168.10.154:9000/api",
  },

  staging: {
    apiUrl: "http://localhost:5000//api",

    // apiUrl: "http://192.168.10.154:9000/api",
  },

  prod: {
    apiUrl: "http://localhost:5000//api",
    // apiUrl: "http://192.168.10.154:9000/api",
  },
};

const getCurrentSetting = () => {
  if (__DEV__) return setting.dev;
  if (Constants.manifest.releaseChannel === "staging") return setting.staging;
  return setting.prod;
};

export default getCurrentSetting();
