import React, { useEffect } from "react";
import { View, ScrollView, FlatList } from "react-native";

import Screen from "../components/common/Screen";
import Text from "../components/common/AppText";

import FoodItem from "../components/lists/ListItem";

import colors from "../config/colors";
import routes from "../navigation/routes";

import useApi from "../hooks/useApi";
import foodApi from "../api/food";

import ProfileBar from "../components/home/ProfileBar";
import SearchBar from "../components/home/SearchBar";
import StudentFavourite from "../components/home/StudentFavourite";
import AllItems from "../components/home/FoodItems";
// import ActivityIndicator from "../components/common/ActivityIndicator";

// const foods = [
//   {
//     _id: "635424e06bdb24a70bf4f736",
//     name: "Nasi Goreng Ayam",
//     description:
//       "Nasi goreng ayam is a traditional Indonesian fried rice dish that's also popular in Singapore, Brunei, and Malaysia. Nasi goreng ayam is actually fried rice usually served with crispy fried chicken with sweet chilli sauce.",
//     price: 9,
//     imageURL:
//       "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
//     available: "yes",
//     orderCount: 4,
//     createdAt: "2022-10-22T17:14:08.181Z",
//     updatedAt: "2022-10-23T17:07:23.875Z",
//     __v: 0,
//   },
//   {
//     _id: "635524d8a8962cac8de081e0",
//     name: "Milo Ais",
//     description:
//       "Milo is a chocolate-flavoured malted powder product produced by Nestlé, typically mixed with milk, hot water, or both, to produce a beverage.",
//     price: 3.5,
//     imageURL:
//       "https://img.freepik.com/free-photo/iced-chocolate_1339-4415.jpg?w=1060&t=st=1666459104~exp=1666459704~hmac=fea1dba9fc0956b02331fd5548528ca57376805943fbd002076df75f23257d28",
//     available: "yes",
//     orderCount: 5,
//     createdAt: "2022-10-23T11:26:16.464Z",
//     updatedAt: "2022-10-23T17:07:23.874Z",
//     __v: 0,
//   },
//   {
//     _id: "63556ff9e0732b4e93544a0c",
//     name: "Roti Canai",
//     description:
//       "Roti canai is a traditional Malaysian pan-fried flatbread made with flour, water, eggs, and fat. The dough for roti canai is repeatedly folded, so the final product has a layered texture, a soft interior, and a crispy outer layer.",
//     price: 1.5,
//     imageURL:
//       "https://img.freepik.com/free-photo/pakistani-food-wooden-board-flat-lay_23-2148825095.jpg?w=1060&t=st=1666543522~exp=1666544122~hmac=1e3bfcf31b911845239cfced3b6dd6668e155e5ad0ee7392f27550876a504c29",
//     available: "yes",
//     orderCount: 0,
//     createdAt: "2022-10-23T16:46:49.201Z",
//     updatedAt: "2022-10-23T16:46:49.201Z",
//     __v: 0,
//   },
// ];

export default function HomeScreen({ navigation }) {
  // const {
  //   message: foodData,
  //   loading: foodLoading,
  //   request: loadFoods,
  // } = useApi(foodApi.getFoods);

  const foodData = useApi(foodApi.getFoods);

  useEffect(() => {
    foodData.request();
  }, []);

  // console.log(favFoodData)

  return (
    <>
      {/* <ActivityIndicator visible={foodData.loading} /> */}

      <Screen style={{ backgroundColor: colors.primary }}>
        {foodData.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton
              marginVertical={50}
              title="Retry"
              onPress={foodData.request}
            />
          </>
        )}

        {/* -------> NAVBAR BAR  */}
        <ProfileBar />

        <ScrollView
          showsVerticalScrollIndicator={false}
          // style={{ marginHorizontal: 15 }}
        >
          <SearchBar />

          {/* -------> STUDENTS FAVOURITE  */}
          <StudentFavourite navigation={navigation} />
          <AllItems navigation={navigation} />
        </ScrollView>
      </Screen>
    </>
  );
}

// useEffect(() => {
//   // foodData.request();
//   fetch("http://192.168.10.56:5000/api/food")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }, []);
