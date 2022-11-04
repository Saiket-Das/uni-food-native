import client from "./client.js";

const signup = (userInfo) => client.post("/users", userInfo);

export default {
  signup,
};
