import { View, Text } from "react-native";
import React from "react";
import Screen from "../components/common/Screen";
import Button from "../components/common/AppButton";
import routes from "../navigation/routes";

export default function HomeScreen({ navigation }) {
  return (
    <Screen>
      <View style={{ padding: 20 }}>
        <Text>HomeScreen</Text>
        <Button
          title="Account"
          onPress={() => navigation.navigate(routes.ACCOUNT)}
        />
      </View>
    </Screen>
  );
}
