import { View, StyleSheet, Image } from "react-native";
import React from "react";
import colors from "../config/colors";
import Button from "../components/common/AppButton";
import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="SIGN IN"
          color="primary"
          onPress={() => navigation.navigate(routes.SIGNIN)}
        />
        <Button
          title="SIGN UP"
          color="primary"
          onPress={() => navigation.navigate(routes.SIGNUP)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  logoContainer: {
    position: "absolute",
    top: 150,
    alignItems: "center",
  },

  logo: {
    width: 155,
    height: 120,
  },

  buttonContainer: {
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
});
