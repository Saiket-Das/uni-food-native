import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import AppText from "../components/common/AppText";
import Button from "../components/common/AppButton";
import Icon from "../components/common/Icon";
import colors from "../confiq/colors";
import QuantityIcon from "../components/common/QuantityIcon";

export default function FoodDescriptionScree({ route }) {
  const food = route.params;

  return (
    <View>
      <View>
        <Image
          style={styles.image}
          source={{ uri: food.imageURL }}
          tint="light"
        />
        <LinearGradient
          start={{ x: 0, y: 0.5 }}
          end={{ x: 0, y: 1 }}
          colors={["#ffffff00", "#fff"]}
          style={styles.linearGradient}
        />
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={{ fontWeight: "900", fontSize: 35 }}>
          {food.name}
        </AppText>

        <View style={styles.descriptionContainer}>
          <AppText style={{ fontWeight: "700" }}>DESCRIPTION</AppText>
          <AppText style={{ fontSize: 16 }} numberOfLines={5}>
            {food.description}
          </AppText>
        </View>

        <View style={styles.descriptionContainer}>
          <AppText style={{ fontWeight: "700" }}>QUANTITY</AppText>
          <View style={styles.itemQuantity}>
            <AppText style={{ fontSize: 16 }}>Items</AppText>
            <View style={styles.icons}></View>
          </View>
        </View>

        <Button title="Add to cart" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },

  linearGradient: {
    position: "absolute",
    width: "100%",
    height: 350,
  },

  detailsContainer: {
    margin: 20,
  },

  descriptionContainer: {
    marginTop: 25,
  },

  itemQuantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  icons: {
    flexDirection: "row",
  },
});
