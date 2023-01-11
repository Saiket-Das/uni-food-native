import { StyleSheet, View } from "react-native";
import React from "react";

import Text from "../common/AppText";
import Avatar from "../common/Avatar";

import colors from "../../config/colors";
import Icon from "../common/Icon";

export default function ProfileBar() {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.avatarContainer}>
        <Avatar imageURL="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80" />
        <Text
          style={{
            fontWeight: "500",
            paddingHorizontal: 15,
            fontSize: 16,
            color: colors.white,
          }}
        >
          Welcome Ahan
        </Text>
      </View>

      <Icon name="bell" size={45} />
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    width: "100%",
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
