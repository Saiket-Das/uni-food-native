import client from "./client";
// console.log(client);

const endpoint = "/food";

const getFoods = async () => {
  return await client.get(`/food`);
};
export default { getFoods };
