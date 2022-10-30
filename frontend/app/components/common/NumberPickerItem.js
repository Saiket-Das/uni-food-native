import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../confiq/colors";
import AppText from "./AppText";

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.itemContainer}>
          <AppText style={{ color: colors.white, fontWeight: "700" }}>
            {item.label}
          </AppText>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  itemContainer: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50 * 0.5,
  },
});
