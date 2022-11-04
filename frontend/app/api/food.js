import client from "./client";

const endpoint = "/food";

const getFoods = async () => {
  return await client.get(endpoint, { timeout: 2 });
};

export default { getFoods };
