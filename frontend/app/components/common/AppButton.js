import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../config/colors";

export default function AppButton({
  title,
  onPress,
  color = "primary",
  textColor = "white",
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
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
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
