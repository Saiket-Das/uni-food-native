import Constants from "expo-constants";

const setting = {
  dev: {
    // apiUrl: "http://localhost:5000",
    // apiUrl: "http://192.168.10.154:5000",
    apiUrl: "https://uni-food-e1arbhh8t-saiket-das.vercel.app",
  },

  staging: {
    // apiUrl: "http://localhost:5000",
    // apiUrl: "http://192.168.10.154:5000",
    apiUrl: "https://uni-food-e1arbhh8t-saiket-das.vercel.app",
  },

  prod: {
    // apiUrl: "http://localhost:5000",
    // apiUrl: "http://192.168.10.154:5000",
    apiUrl: "https://uni-food-e1arbhh8t-saiket-das.vercel.app",
  },
};

const getCurrentSetting = () => {
  if (__DEV__) return setting.dev;
  if (Constants.manifest.releaseChannel === "staging") return setting.staging;
  return setting.prod;
};

export default getCurrentSetting();
