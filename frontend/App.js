import { StyleSheet, View } from "react-native";
import Button from "./app/components/common/AppButton";
import Text from "./app/components/common/AppText";
import AppTextInput from "./app/components/common/AppTextInput";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>
        Student's favourite
      </Text>

      <AppTextInput icon="email" placeholder="Enter your email" />

      <Button title="Add to cart" />
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
