import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";

import colors from "../confiq/colors";
import Screen from "../components/common/Screen";
import Button from "../components/common/AppButton";

import OrderHeader from "../components/cart/OrderHeader";
import TotalAmount from "../components/cart/TotalAmount";
import OrderLists from "../components/cart/OrderList";

export default function CartScreen({ navigation }) {
  return (
    <Screen style={{ backgroundColor: colors.primary }}>
      <OrderHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 10 }}>
          <TotalAmount />
          <OrderLists />

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
