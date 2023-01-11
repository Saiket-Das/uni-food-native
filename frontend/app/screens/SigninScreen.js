import React from "react";
import { StyleSheet, View } from "react-native";

import Screen from "../components/common/Screen";
import Text from "../components/common/AppText";

import Form from "../components/forms/AppForm";
import FormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import ErrorMessage from "../components/forms/ErrorMessage";

export default function SigninScreen() {
  return (
    <Screen style={styles.container}>
      <View style={styles.textContaier}>
        <Text style={{ fontWeight: "700", fontSize: "45" }}>Welcome back</Text>
        <Text style={{ fontSize: "20" }}>Sign in to contiune</Text>
      </View>

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log("VVVValues ----------->", values)}
      >
        <ErrorMessage
          error="Invalid email and/or password"
          // visible={loginFailed}
          // visible={true}
        />

        <FormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <FormField
          name="password"
          icon="lock"
          placeholder="Password"
          autoCorrect={false}
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="SIGN IN" />
      </Form>
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
});
