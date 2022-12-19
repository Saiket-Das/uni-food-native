import client from "./client";

const addFood = async (data) => {
  await client.post("/api/food", data);
};

const getFoods = () => client.get("/api/food");

const getStudentsFavouriteFood = async () => {
  return await client.get("/api/food/favourite");
};

const deleteFood = async (id) => {
  return await client.delete(`/api/food/${id}`);
};

export default { getFoods, addFood, getStudentsFavouriteFood, deleteFood };
