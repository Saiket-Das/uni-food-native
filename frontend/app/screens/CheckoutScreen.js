import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";

import colors from "../confiq/colors";
import Screen from "../components/common/Screen";
import Button from "../components/common/AppButton";

import OrderHeader from "../components/cart/OrderHeader";
import TotalAmount from "../components/cart/TotalAmount";
import OrderList from "../components/cart/OrderList";
import routes from "../navigation/routes";
import { useSelector } from "react-redux";

export default function CartScreen({ navigation }) {
  const foodCart = useSelector((state) => state.cart.cart);

  return (
    <Screen style={{ backgroundColor: colors.primary }}>
      <OrderHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 10 }}>
          <TotalAmount foodCart={foodCart} />
          <OrderList foodCart={foodCart} />

          <Button
            title="Checkout"
            onPress={() => navigation.navigate(routes.PAYMENT)}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}
