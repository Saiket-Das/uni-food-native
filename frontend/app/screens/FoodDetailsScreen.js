import { View, Image, StyleSheet } from "react-native";
import React from "react";
import AppText from "../components/common/AppText";
import Button from "../components/common/AppButton";

export default function FoodDescriptionScree({ route }) {
  const food = route.params;

  return (
    <View>
      <View>
        <View
          style={{
            backgroundColor: "white",
            position: "absolute",
            width: "100%",
            height: 350,
          }}
        ></View>
        <Image
          style={styles.image}
          source={{ uri: food.imageURL }}
          tint="light"
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
  detailsContainer: {
    margin: 20,
  },

  descriptionContainer: {
    marginTop: 25,
  },
});
