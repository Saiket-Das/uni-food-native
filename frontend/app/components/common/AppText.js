import { View, Text } from "react-native";
import React from "react";
import defaultStyles from "../../confiq/styles";
import Screen from "./Screen";

export default function AppText({ style, children, ...otherProps }) {
  return (
    <Screen>
      <Text style={[defaultStyles, style]} {...otherProps}>
        {children}
      </Text>
    </Screen>
  );
}
