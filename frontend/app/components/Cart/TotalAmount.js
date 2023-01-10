import { View, StyleSheet } from "react-native";
import React from "react";

import Text from "../common/AppText";
import colors from "../../confiq/colors";
import ListItemSperator from "../lists/ListItemSperator";

export default function TotalAmount({ foodCart }) {
  const total = foodCart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  // console.log("foodCart", foodCart);
  // console.log("total", total);

  return (
    <View style={styles.totalContainer}>
      <View>
        <View style={styles.totalSubtotal}>
          <Text style={{ color: colors.darkGray }}>Subtotal</Text>
          <Text style={{ color: colors.darkGray }}>RM{total}</Text>
        </View>

        <ListItemSperator style={{ marginVertical: 10 }} />
        <View style={styles.totalSubtotal}>
          <Text style={{ fontWeight: "600", fontSize: "22" }}>Total</Text>
          <Text style={{ fontWeight: "600", fontSize: "22" }}>RM{total}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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

  totalSubtotal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
