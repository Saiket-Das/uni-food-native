import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import Text from "../common/AppText";
import colors from "../../config/colors";

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "800", fontSize: "30", color: colors.white }}>
        Profile
      </Text>
      <TouchableOpacity>
        <Text style={{ fontWeight: "500", color: colors.white }}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.primary,
  },
});
