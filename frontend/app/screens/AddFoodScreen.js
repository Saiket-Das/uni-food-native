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
import PickerItem from "../components/common/PickerItem";

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
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
          name="category"
          numberOfColumns={3}
          PickerItemComponent={PickerItem}
          placeholder="Category"
          width="50%"
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
