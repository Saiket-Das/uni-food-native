import { StyleSheet, View } from "react-native";
import React from "react";
import Text from "./AppText";
import colors from "../../config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

export default function OfflineNotice() {
  const netInfo = useNetInfo();

  //   if (netInfo === "unknown" && netInfo.isInternetReachable === true) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Internet Connection</Text>
    </View>
  );
  //   }
  //   return null;
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: "100%",
    height: 50,
    position: "absolute",
    top: Constants.statusBarHeight,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: colors.white,
  },
});
