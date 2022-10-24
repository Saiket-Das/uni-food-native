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

export default function Card({ name, price, imageURL }) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          //   uri={{ imageURL }}
          //   preview={{ uri: imageURL }}
          source={{ uri: imageURL }}
        />

        <View style={styles.detailsConTainer}>
          <View style={styles.textConTainer}>
            <Text style={{ fontWeight: "500" }}>{name}</Text>
            <Text style={{ fontWeight: "800", marginTop: 5 }}>
              RM{price.toFixed(2)}
            </Text>
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
    marginRight: 20,
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
