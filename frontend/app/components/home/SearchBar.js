import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";

import TextInput from "../common/AppTextInput";
import Icon from "../common/Icon";
import colors from "../../config/colors";
import AppText from "../common/AppText";

export default function SearchBar() {
  return (
    <View style={styles.searchContainer}>
      {/* <TextInput
        icon="find-replace"
        iconSize={18}
        iconColor={colors.darkGray}
        placeholder="Search"
        width="100%"
        height={45}
      /> */}
      {/* <Icon name="filter-variant" size={40} /> */}

      <TouchableWithoutFeedback>
        <View style={styles.searchButton}>
          <Icon
            name="find-replace"
            backgroundColor={colors.white}
            iconColor={colors.darkGray}
          />
          <AppText>Search</AppText>
        </View>
      </TouchableWithoutFeedback>
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

  searchButton: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 10,
  },
});
