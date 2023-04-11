import { StyleSheet, View } from "react-native";
import React from "react";

import Text from "../common/AppText";
import Avatar from "../common/Avatar";

import colors from "../../config/colors";
import Icon from "../common/Icon";
import useAuth from "../../auth/useAuth";

export default function ProfileBar() {
  const { user } = useAuth();
  console.log(user);

  const name = user.name.split(" ")[0];
  // console.log(name[0].toUpperCase());

  return (
    <View style={styles.profileContainer}>
      <View style={styles.avatarContainer}>
        <Avatar imageURL={user.imageURL} />
        <Text
          style={{
            fontWeight: "500",
            paddingHorizontal: 15,
            fontSize: 16,
            color: colors.white,
          }}
        >
          Welcome {name}
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
    paddingBottom: 10,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
