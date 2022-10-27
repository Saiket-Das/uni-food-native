import React from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../components/common/Screen";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import Text from "../components/common/AppText";

export default function SignupScreen() {
  return (
    <Screen style={styles.container}>
      <View style={styles.textContaier}>
        <Text style={{ fontWeight: "700", fontSize: "45" }}>
          Hi! Unitarians
        </Text>
        <Text style={{ fontSize: "20" }}>Sign up to enjoy the app</Text>
      </View>

      <AppForm>
        <AppFormField
          name="name"
          icon="account"
          placeholder="Full name"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <AppFormField
          name="password"
          icon="lock"
          placeholder="Password"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="SIGN UP" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 25,
    justifyContent: "center",
  },

  textContaier: {
    marginBottom: 50,
  },

  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
