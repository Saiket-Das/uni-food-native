import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppButton from "./app/components/common/AppButton";
import Text from "./app/components/common/AppText";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "red" }}>
        Open up App.js to start working on your app!
      </Text>
      <AppButton title="Add to cart" />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
