import {
  FlatList,
  Image,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../confiq/colors";

import Screen from "../components/common/Screen";
import Text from "../components/common/AppText";
import ListItem from "../components/lists/ListItem";
import Icon from "../components/common/Icon";
import ListItemSeprator from "../components/lists/ListItemSperator";
// import useAuth from "../auth/useAuth";

export default function AccountScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // const { user, logOut } = useAuth();
  // console.log(user);

  return (
    <Screen style={{ backgroundColor: colors.primary }}>
      <View style={styles.container}>
        <Text
          style={{ fontWeight: "800", fontSize: "30", color: colors.white }}
        >
          Profile
        </Text>
        <TouchableOpacity>
          <Text style={{ fontWeight: "500", color: colors.white }}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.profile}>
          <Image
            style={styles.image}
            source={require("../assets/images/avatar.jpg")}
          />

          <View style={styles.detailsContainer}>
            <Text style={{ fontWeight: "600" }} numberOfLines={1}>
              Ahan Bryan
            </Text>

            <Text style={{ color: colors.darkGray }}>ahanbryan@gmail.com</Text>
          </View>
        </View>
        <View>
          <ListItemSeprator style={{ marginVertical: 10 }} />
          <View style={styles.notificationContainer}>
            <Text
              style={{
                fontWeight: "600",
                color: isEnabled ? colors.dark : colors.darkGray,
              }}
            >
              Notification
            </Text>
            <Switch
              // style={{ width: 20, height: 10 }}
              style={{ transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }] }}
              trackColor={{ false: colors.black, true: colors.primary }}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>

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
          title="Terms of use"
          IconComponent={
            <Icon
              name="exclamation-thick"
              size={44}
              backgroundColor="#00CA9D"
            />
          }
        />
      </View>

      <View style={styles.item}>
        <ListItem
          title="Privacy policy"
          IconComponent={
            <Icon name="lock" size={44} backgroundColor="#f7753e" />
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
              backgroundColor="#ffe66d"
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

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.primary,
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
