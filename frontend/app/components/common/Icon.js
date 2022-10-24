import { View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({
  name,
  //   backgroundColor = "#000",
  size = 50,
  iconColor = "#000",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        // backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: size / 2,
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}
