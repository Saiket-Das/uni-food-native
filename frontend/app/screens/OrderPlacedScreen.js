import { View, Text, StyleSheet } from "react-native";
import React from "react";

import colors from "../confiq/colors";

import Button from "../components/common/AppButton";
import routes from "../navigation/routes";

export default function OrderPlacedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>OrderPlacedScreen</Text>
      <Text>OrderPlacedScreen</Text>

      <Button
        title="Payment"
        color="white"
        onPress={() => navigation.navigate(routes.ACCOUNT)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
});
