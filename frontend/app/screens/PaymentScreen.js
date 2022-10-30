import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FormPicker from "../components/forms/AppFormPicker";
import NumberPickerItem from "../components/common/NumberPickerItem";
import AppForm from "../components/forms/AppForm";

import colors from "../confiq/colors";

import Screen from "../components/common/Screen";

const tablenumbers = [
  {
    label: "1",
    value: 1,
  },
  {
    label: "2",
    value: 2,
  },
  {
    label: "3",
    value: 3,
  },
  {
    label: "4",
    value: 4,
  },
  {
    label: "5",
    value: 5,
  },
  {
    label: "6",
    value: 6,
  },

  {
    label: "7",
    value: 7,
  },
  {
    label: "8",
    value: 8,
  },
  {
    label: "9",
    value: 9,
  },
  {
    label: "10",
    value: 10,
  },
  {
    label: "11",
    value: 11,
  },
  {
    label: "12",
    value: 12,
  },
];

export default function OrderDone() {
  return (
    <Screen>
      <View style={{ margin: 10 }}>
        <View style={styles.totalContainer}>
          <View>
            <Text style={{ fontWeight: "600", fontSize: "20" }}>Table No</Text>
          </View>

          <AppForm>
            <FormPicker
              items={tablenumbers}
              name="tableno"
              numberOfColumns={3}
              PickerItemComponent={NumberPickerItem}
              placeholder="Table No"
            />
          </AppForm>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "center",
    backgroundColor: colors.primary,
  },

  totalContainer: {
    backgroundColor: colors.white,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 20,
  },

  itemContainer: {
    backgroundColor: colors.white,
    marginTop: 15,
    borderRadius: 10,
  },

  totalSubtotal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
