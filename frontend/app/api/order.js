import client from "./client";

const getAllOrders = async () => {
  return await client.get("/api/order");
};

export default {
  getAllOrders,
};
