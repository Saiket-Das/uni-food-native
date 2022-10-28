import { View, Image, StyleSheet } from "react-native";
import React from "react";
import AppText from "../components/common/AppText";
import Button from "../components/common/AppButton";
import { LinearGradient } from "expo-linear-gradient";

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
          <AppText style={{ fontSize: 16 }}>{food.description}</AppText>
        </View>

        <View style={styles.descriptionContainer}>
          <AppText style={{ fontWeight: "700" }}>QUANTITY</AppText>
          <AppText style={{ fontSize: 16 }}>Items</AppText>
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
    // flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5
    position: "absolute",
    // top: 100,
    width: "100%",
    height: 350,
    opacity: 1,
  },

  detailsContainer: {
    margin: 20,
  },

  descriptionContainer: {
    marginTop: 25,
  },
});
