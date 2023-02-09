import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/common/Screen";
import Text from "../components/common/AppText";

import Form from "../components/forms/AppForm";
import FormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import ErrorMessage from "../components/forms/ErrorMessage";

import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function SigninScreen() {
  const { login } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  return (
    <Screen style={styles.container}>
      <View style={styles.textContaier}>
        <Text style={{ fontWeight: "700", fontSize: "45" }}>Welcome back</Text>
        <Text style={{ fontSize: "20" }}>Sign in to contiune</Text>
      </View>

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) =>
          console.log("Email & Password Values ----------->", values)
        }
      >
        <ErrorMessage
          error="Invalid email and/or password"
          // visible={loginFailed}
          visible={false}
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
