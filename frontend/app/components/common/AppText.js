import { View, Text } from "react-native";
import React from "react";
import defaultStyles from "../../confiq/styles";

export default function AppText({ style, children, ...otherProps }) {
  return (
    <View>
      <Text style={[defaultStyles, style]} {...otherProps}>
        {children}
      </Text>
    </View>
  );
}
