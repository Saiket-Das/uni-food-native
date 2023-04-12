import client from "./client";

const addOrder = async (data) => {
  // console.log("ORDER DATA->> ", data);
  const result = await client.post("/api/order", data);
  console.log("Result ->> ", result);
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
