import { View, TouchableOpacity } from "react-native";
import React from "react";

import colors from "../../confiq/colors";
import { AntDesign } from "@expo/vector-icons";

export default function QuantityIcon({
  name,
  size,
  onPress,
  iconColor = colors.primary,
  style,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[style]}>
        <AntDesign name={name} color={iconColor} size={size} />
      </View>
    </TouchableOpacity>
  );
}
