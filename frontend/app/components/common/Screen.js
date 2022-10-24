import { View, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";

export default function Screen({ style, children }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },

  view: {
    flex: 1,
  },
});
