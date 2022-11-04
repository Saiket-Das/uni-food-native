import client from "./client";

const endpoint = "/food";

const getFoods = async () => {
  return await client.get(endpoint, { timeout: 2 });
};

const addFood = async (data) => {
  await client.post(endpoint, data);
};

export default { getFoods, addFood };
