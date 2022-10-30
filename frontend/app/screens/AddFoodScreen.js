import React from "react";
import { View, StyleSheet } from "react-native";

import AppForm from "../components/forms/AppForm";
import FormField from "../components/forms/AppFormField";
import FormPicker from "../components/forms/AppFormPicker";
import SubmitButton from "../components/forms/SubmitButton";

import colors from "../confiq/colors";

import Screen from "../components/common/Screen";
import Text from "../components/common/AppText";
import ImageInput from "../components/common/ImageInput";
import PickerItem from "../components/common/PickerItem.js";

const categories = [
  {
    label: "Malaysian",
    value: 1,
  },
  {
    label: "Thai",
    value: 2,
  },
  {
    label: "Chinese",
    value: 3,
  },
  {
    label: "Indian",
    value: 6,
  },
  {
    label: "Indonesian",
    value: 4,
  },
  // {
  //   label: "Vi",
  //   value: 5,
  // },
];

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

        <FormPicker
          items={categories}
          name="cusine"
          numberOfColumns={1}
          PickerItemComponent={PickerItem}
          placeholder="Cusine"
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
