import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../confiq/colors";
import Text from "../common/AppText";

export default function ErrorMessage({ error, visible }) {
  if (!visible) return null;
  return <Text style={styles.error}>{error}</Text>;
}
const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});
