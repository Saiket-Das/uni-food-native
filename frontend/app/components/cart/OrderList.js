import { FlatList, StyleSheet, View } from "react-native";
import React from "react";

import FoodItem from "../lists/ListItem";
import colors from "../../confiq/colors";

export default function OrderList({ foodCart }) {
  return (
    <View style={styles.itemContainer}>
      <FlatList
        vertical={true}
        scrollEnabled={false}
        data={foodCart}
        keyExtractor={(listing) => listing._id}
        renderItem={({ item }) => (
          <FoodItem
            title={item.name}
            quantity={item.quantity}
            price={item.price}
            imageUri={item.imageURL}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.white,
    marginTop: 15,
    borderRadius: 10,
  },
});
