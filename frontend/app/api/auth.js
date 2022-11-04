import client from "./client";

const signin = (email, password) =>
  client.post("/api/signin", { email, password });

export default {
  signin,
};
