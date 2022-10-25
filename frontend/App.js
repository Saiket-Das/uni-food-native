import { FlatList, ScrollView, StyleSheet, View } from "react-native";

import Button from "./app/components/common/AppButton";
import Text from "./app/components/common/AppText";
import TextInput from "./app/components/common/AppTextInput";
import Card from "./app/components/common/Card";
import ImageInput from "./app/components/common/ImageInput";
import Screen from "./app/components/common/Screen";
import FoodItem from "./app/components/list/ListItem";
import ListItemSperator from "./app/components/list/ListItemSperator";
// import Icon from "./app/components/common/Icon";
// import ActivityIndicator from "./app/components/common/ActivityIndicator";

const foods = [
  {
    _id: "635424e06bdb24a70bf4f736",
    name: "Nasi Goreng Ayam",
    description:
      "Nasi goreng ayam is a traditional Indonesian fried rice dish that's also popular in Singapore, Brunei, and Malaysia. Nasi goreng ayam is actually fried rice usually served with crispy fried chicken with sweet chilli sauce.",
    price: 9,
    imageURL:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    available: "yes",
    orderCount: 4,
    createdAt: "2022-10-22T17:14:08.181Z",
    updatedAt: "2022-10-23T17:07:23.875Z",
    __v: 0,
  },
  {
    _id: "635524d8a8962cac8de081e0",
    name: "Milo Ais",
    description:
      "Milo is a chocolate-flavoured malted powder product produced by Nestlé, typically mixed with milk, hot water, or both, to produce a beverage.",
    price: 3.5,
    imageURL:
      "https://img.freepik.com/free-photo/iced-chocolate_1339-4415.jpg?w=1060&t=st=1666459104~exp=1666459704~hmac=fea1dba9fc0956b02331fd5548528ca57376805943fbd002076df75f23257d28",
    available: "yes",
    orderCount: 5,
    createdAt: "2022-10-23T11:26:16.464Z",
    updatedAt: "2022-10-23T17:07:23.874Z",
    __v: 0,
  },
  {
    _id: "63556ff9e0732b4e93544a0c",
    name: "Roti Canai",
    description:
      "Roti canai is a traditional Malaysian pan-fried flatbread made with flour, water, eggs, and fat. The dough for roti canai is repeatedly folded, so the final product has a layered texture, a soft interior, and a crispy outer layer.",
    price: 1.5,
    imageURL:
      "https://img.freepik.com/free-photo/pakistani-food-wooden-board-flat-lay_23-2148825095.jpg?w=1060&t=st=1666543522~exp=1666544122~hmac=1e3bfcf31b911845239cfced3b6dd6668e155e5ad0ee7392f27550876a504c29",
    available: "yes",
    orderCount: 0,
    createdAt: "2022-10-23T16:46:49.201Z",
    updatedAt: "2022-10-23T16:46:49.201Z",
    __v: 0,
  },
];

export default function App() {
  return (
    <>
      {/* <ActivityIndicator visible={true} /> */}
      <Screen>
        <ScrollView showsVerticalScrollIndicator={false} style={{ margin: 15 }}>
          {/* <Icon name="lock" iconColor="white" /> */}

          <View style={styles.buttonContainer}>
            <TextInput icon="email" placeholder="Enter your email" />
            <Button title="Add to cart" />
          </View>

          <View>
            <Text
              style={{ fontWeight: "700", fontSize: 22, marginVertical: 10 }}
            >
              Students favourite
            </Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={foods}
              keyExtractor={(listing) => listing._id}
              renderItem={({ item }) => (
                <Card
                  style={styles.card}
                  name={item.name}
                  price={item.price}
                  imageURL={item.imageURL}
                />
              )}
            />
          </View>

          <View>
            <Text style={{ fontWeight: "700", marginVertical: 10 }}>
              All items
            </Text>
            <FlatList
              data={foods}
              keyExtractor={(listing) => listing._id}
              renderItem={({ item }) => (
                <FoodItem
                  title={item.name}
                  subTitle={item.description}
                  price={item.price}
                  imageUri={item.imageURL}
                />
              )}
              ItemSeparatorComponent={ListItemSperator}
            />
          </View>

          <View style={{ paddingTop: 15 }}>
            <ImageInput />
          </View>
        </ScrollView>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  // style={styles.container}
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },

  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },

  card: {
    padding: 20,
  },
});
