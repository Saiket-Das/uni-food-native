import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator
      mode="modal"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Feed" component={HomeScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
}
