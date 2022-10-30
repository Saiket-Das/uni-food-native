import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../confiq/colors";

import CheckoutScreen from "../screens/CheckoutScreen";
import PaymentScreen from "../screens/PaymentScreen";
import OrderPlacedScreen from "../screens/OrderPlacedScreen";

const Stack = createStackNavigator();

export default function CheckoutNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="checkout"
        component={CheckoutScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{
          title: "Payment",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            color: colors.white,
            fontWeight: "bold",
          },
        }}
        name="payment"
        component={PaymentScreen}
      />

      <Stack.Screen
        name="orderPlaced"
        component={OrderPlacedScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
