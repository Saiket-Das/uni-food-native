import { StyleSheet, View } from "react-native";
import React from "react";

import Text from "../common/AppText";
import colors from "../../config/colors";

export default function OrderHeader() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "800", fontSize: "30", color: colors.white }}>
        Order
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
});
