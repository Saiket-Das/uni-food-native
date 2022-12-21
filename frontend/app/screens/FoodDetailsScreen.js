import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useDispatch } from "react-redux";

import AppText from "../components/common/AppText";
import Button from "../components/common/AppButton";
import colors from "../confiq/colors";
import QuantityIcon from "../components/common/QuantityIcon";

import { addToCart, removeFromCart } from "../redux/features/cart/cartSlice";

export default function FoodDetailsScreen({ route }) {
  const food = route.params;

  const dispatch = useDispatch();

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
            <View style={styles.icons}>
              <QuantityIcon
                onPress={() => dispatch(removeFromCart(food))}
                name="minus"
                size={22}
                style={{
                  paddingHorizontal: 4,
                  borderColor: colors.primary,
                  borderWidth: 1,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                }}
              />

              <QuantityIcon
                onPress={() => dispatch(addToCart(food))}
                name="plus"
                size={22}
                iconColor={colors.white}
                style={{
                  paddingHorizontal: 4,
                  borderColor: colors.primary,
                  borderWidth: 1,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: colors.primary,
                }}
              />
            </View>
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
