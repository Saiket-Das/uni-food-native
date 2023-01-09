import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import colors from "../confiq/colors";
import Screen from "../components/common/Screen";
import Text from "../components/common/AppText";
import Button from "../components/common/AppButton";
import FoodItem from "../components/lists/ListItem";
import ListItemSperator from "../components/lists/ListItemSperator";
import routes from "../navigation/routes";
import OrderHeader from "../components/Cart/OrderHeader";
import TotalAmount from "../components/Cart/TotalAmount";

export default function OrderList({ navigation }) {
  const foodCart = useSelector((state) => state.cart.cart);

  return (
    <Screen style={{ backgroundColor: colors.primary }}>
      <OrderHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 10 }}>
          <TotalAmount />

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
          <Button
            title="Checkout"
            onPress={() => navigation.navigate(routes.PAYMENT)}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "center",
    backgroundColor: colors.primary,
  },

  totalContainer: {
    backgroundColor: colors.white,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 20,
  },

  itemContainer: {
    backgroundColor: colors.white,
    marginTop: 15,
    borderRadius: 10,
  },

  totalSubtotal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
