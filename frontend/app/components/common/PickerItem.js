import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Text from "./AppText";
import Icon from "./Icon";
import colors from "../../confiq/colors";

export default function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{item.label}</Text>
        <Icon
          name="arrow-right"
          iconColor={colors.darkGray}
          size={40}
          backgroundColor={colors.light}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.light,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  text: {},
});
