import { Image, StyleSheet, Switch, View } from "react-native";
import React from "react";

import Text from "../common/AppText";
import colors from "../../config/colors";

import ListItemSeprator from "../lists/ListItemSperator";

export default function MyProfileDetails({ toggleSwitch, isEnabled }) {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profile}>
        <Image
          style={styles.image}
          source={require("../../assets/images/avatar.jpg")}
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
  );
}

const styles = StyleSheet.create({
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

  notificationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
  },
});
