import client from "./client";

const endpoint = "/food";

const getFoods = () => client.get(endpoint);

export default getFoods;
