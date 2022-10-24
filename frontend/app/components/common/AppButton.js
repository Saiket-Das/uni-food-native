import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../confiq/colors";

export default function AppButton({
  title,
  onPress,
  color = "primary",
  marginVertical = 20,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color] },
        { marginVertical },
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
  },
});
