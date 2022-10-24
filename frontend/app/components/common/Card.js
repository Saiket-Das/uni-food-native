import {
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

import Text from "./AppText";
import Icon from "./Icon";
import colors from "../../confiq/colors";

export default function Card() {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          source={{
            uri: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
          }}
        />

        <View style={styles.detailsConTainer}>
          <View style={styles.textConTainer}>
            <Text style={{ fontWeight: "500" }}>Nasi Goreng Ayam</Text>
            <Text style={{ fontWeight: "800" }}>RM12.00</Text>
          </View>

          <TouchableOpacity>
            <Icon name="plus" iconColor="white" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 250,
    borderRadius: 5,
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: colors.light,
  },

  image: {
    width: 250,
    height: 160,
    borderRadius: 5,
  },

  detailsConTainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 10,
  },
});
