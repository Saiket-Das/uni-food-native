import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import AppForm from "../components/forms/AppForm";
import FormField from "../components/forms/AppFormField";
import FormPicker from "../components/forms/AppFormPicker";
import SubmitButton from "../components/forms/SubmitButton";

import colors from "../config/colors";

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
    <Screen style={{ backgroundColor: colors.primary }}>
      <View style={styles.container}>
        <Text
          style={{ fontWeight: "800", fontSize: "30", color: colors.white }}
        >
          Add new food
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
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
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  formContainer: {
    margin: 15,
    justifyContent: "center",
  },
});
