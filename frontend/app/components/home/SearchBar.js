import { StyleSheet, View } from "react-native";
import React from "react";

import TextInput from "../common/AppTextInput";
// import Icon from "../common/Icon";
import colors from "../../confiq/colors";

export default function SearchBar() {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        icon="find-replace"
        iconSize={18}
        iconColor={colors.darkGray}
        placeholder="Search.."
        width="100%"
        height={45}
      />
      {/* <Icon name="filter-variant" size={40} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
});
