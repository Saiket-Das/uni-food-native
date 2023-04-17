import { View, Text, StyleSheet } from "react-native";
import React from "react";

import colors from "../config/colors";

import Button from "../components/common/AppButton";
import routes from "../navigation/routes";
import AppText from "../components/common/AppText";

export default function OrderPlacedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* {/* <Text>OrderPlacedScreen</Text> */}
      <AppText style={{ fontWeight: "600", fontSize: "22", color: "white" }}>
        Order Placed
      </AppText>

      <Button
        title="GO HOME"
        color="white"
        textColor="black"
        onPress={() => navigation.navigate(routes.HOME)}
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
    padding: 15,
  },
});
