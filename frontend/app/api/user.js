import client from "./client";

const signup = (userInfo) => client.post("/api/signup", userInfo);

export default {
  signup,
};
