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
import authApi from "../api/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function SigninScreen() {
  const { user, login } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.signin(email, password);

    if (!result.status == "Fail") setLoginFailed(true);
    setLoginFailed(false);

    login(result.data.data);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.textContaier}>
        <Text style={{ fontWeight: "700", fontSize: "45" }}>Welcome back</Text>
        <Text style={{ fontSize: "20" }}>Sign in to contiune</Text>
      </View>

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password"
          visible={loginFailed}
        />

        <FormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
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
