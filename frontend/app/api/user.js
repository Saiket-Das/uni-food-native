import client from "./client";

const signup = (userInfo) => client.post("/users", userInfo);

export default {
  signup,
};
