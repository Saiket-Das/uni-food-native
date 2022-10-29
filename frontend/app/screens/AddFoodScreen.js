import React from "react";
import { View, StyleSheet } from "react-native";

import Screen from "../components/common/Screen";
import AppForm from "../components/forms/AppForm";
import FormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import Text from "../components/common/AppText";
import ImageInput from "../components/common/ImageInput";
import colors from "../confiq/colors";

export default function AddFood() {
  return (
    <Screen style={styles.container}>
      <View style={styles.textContaier}>
        <Text
          style={{ fontWeight: "700", fontSize: "30", color: colors.primary }}
        >
          Add new food
        </Text>
        {/* <Text style={{ fontSize: "20" }}>Add new food</Text> */}
      </View>

      <AppForm>
        <FormField name="title" placeholder="Title" />

        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />

        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
          height={120}
        />

        <ImageInput />

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
    marginBottom: 15,
    // flexDirection: "row",
    // justifyContent: "center",
  },

  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
