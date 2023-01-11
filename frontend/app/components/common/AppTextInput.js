import { View, StyleSheet, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../../config/styles";

export default function AppTextInput({
  icon,
  iconSize = 20,
  iconColor = defaultStyles.colors.primary,
  width = "100%",
  height,
  ...otherProps
}) {
  return (
    <View style={[styles.container, { width }, { height }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={iconSize}
          color={iconColor}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.black}
        style={[defaultStyles.text, { width }, { height }]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
  },

  icon: {
    marginRight: 10,
  },
});
