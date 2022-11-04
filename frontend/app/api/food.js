import client from "./client";

const endpoint = "/food";

const addFood = async (data) => {
  await client.post(endpoint, data);
};

const getFoods = async () => {
  return await client.get(endpoint, { timeout: 2 });
};

const deleteFood = async (id) => {
  return await client.delete(`${endpoint}/${id}`);
};

export default { getFoods, addFood, deleteFood };
