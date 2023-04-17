import client from "./client";

const addOrder = async (data) => {
  return await client.post("/api/order", data);
};

const getAllOrders = async () => {
  return await client.get("/api/order");
};

const deleteOrder = async (id) => {
  return await client.delete(`/api/order/${id}`);
};

export default {
  addOrder,
  getAllOrders,
  deleteOrder,
};
