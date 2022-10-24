import { StyleSheet, View } from "react-native";
import Button from "./app/components/common/AppButton";
import Text from "./app/components/common/AppText";
import AppTextInput from "./app/components/common/AppTextInput";
import Icon from "./app/components/common/Icon";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>
        Student's favourite
      </Text>

      <Icon name="lock" />

      <View style={styles.buttonContainer}>
        <AppTextInput icon="email" placeholder="Enter your email" />
        <Button title="Add to cart" />
      </View>

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

  buttonContainer: {
    width: "100%",
    padding: 15,
    alignItems: "center",
  },
});
