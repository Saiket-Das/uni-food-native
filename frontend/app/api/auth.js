import client from "./client";

const signin = (email, password) =>
  client.post("/api/user/signin", { email, password });

export default {
  signin,
};
