import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import colors from "../config/colors";

import Screen from "../components/common/Screen";
import ListItem from "../components/lists/ListItem";
import Icon from "../components/common/Icon";
import ProfileHeader from "../components/account/ProfileHeader";
import MyProfileDetails from "../components/account/MyProfileDetails";
// import useAuth from "../auth/useAuth";

export default function AccountScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Screen style={{ backgroundColor: colors.primary }}>
      <ProfileHeader />

      <MyProfileDetails isEnabled={isEnabled} toggleSwitch={toggleSwitch} />

      <View style={styles.item}>
        <ListItem
          title="Settings"
          IconComponent={
            <Icon
              name="account-settings"
              size={44}
              backgroundColor={colors.secondary}
            />
          }
        />
      </View>

      <View style={styles.item}>
        <ListItem
          title="Messages"
          IconComponent={
            <Icon name="chat" size={44} backgroundColor="#f7753e" />
          }
        />
      </View>

      <View style={styles.item}>
        <ListItem
          title="Privacy policy"
          IconComponent={
            <Icon name="lock" size={44} backgroundColor="#64c8f0" />
          }
        />
      </View>

      <View style={styles.item}>
        <ListItem
          title="Logout"
          IconComponent={
            <Icon
              name="logout"
              size={44}
              backgroundColor="#ffd623"
              // onPress={() => logOut()}
            />
          }
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  Screen: {
    backgroundColor: colors.light,
  },

  profile: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: colors.white,
  },

  profileContainer: {
    backgroundColor: colors.white,
    margin: 15,
    marginBottom: 50,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 20,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  detailsContainer: {
    marginLeft: 15,
  },

  itemContainer: {
    backgroundColor: colors.white,
    marginTop: 15,
    borderRadius: 10,
  },

  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
  },

  item: {
    marginHorizontal: 10,
  },
});
