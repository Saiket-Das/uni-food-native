import React from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../components/common/Screen";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import ErrorMessage from "../components/forms/ErrorMessage";
import Text from "../components/common/AppText";

export default function SignupScreen() {
  return (
    <Screen style={styles.container}>
      <View style={styles.textContaier}>
        <Text style={{ fontWeight: "700", fontSize: "40" }}>Welcome back</Text>
        <Text style={{ fontSize: "20" }}>Sign in to contiune</Text>
      </View>

      <AppForm>
        <ErrorMessage
          error="Invalid email and/or password"
          // visible={loginFailed}
          visible={true}
        />

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

        <SubmitButton title="SIGN IN" />
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