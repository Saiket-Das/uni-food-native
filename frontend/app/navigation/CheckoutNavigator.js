import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CheckoutScreen from "../screens/CheckoutScreen";
import PaymentScreen from "../screens/PaymentScreen";

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
        options={{ title: "Payment" }}
        name="payment"
        component={PaymentScreen}
      />
    </Stack.Navigator>
  );
}
