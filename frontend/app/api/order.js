import client from "./client";

const addOrder = async (data) => {
  await client.post("/api/order", data);
};

const getAllOrders = async () => {
  return await client.get("/api/order");
};

export default {
  addOrder,
  getAllOrders,
};
