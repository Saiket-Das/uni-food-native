import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useDispatch, useSelector } from "react-redux";

import Text from "../components/common/AppText";
import Button from "../components/common/AppButton";
import colors from "../config/colors";
import QuantityIcon from "../components/common/QuantityIcon";

import { addToCart, removeFromCart } from "../redux/features/cart/cartSlice";

export default function FoodDetailsScreen({ route }) {
  const food = route.params;

  // const orderFoodInfo = {
  //   foodId: food._id,
  //   foodName: food.name,
  // }

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  const cartFood = cart.find((cartFood) => cartFood._id === food._id);

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
        <Text style={{ fontWeight: "900", fontSize: 35 }}>{food.name}</Text>

        <View style={styles.descriptionContainer}>
          <Text style={{ fontWeight: "700" }}>DESCRIPTION</Text>
          <Text style={{ fontSize: 16 }} numberOfLines={5}>
            {food.description}
          </Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={{ fontWeight: "700" }}>QUANTITY</Text>
          <View style={styles.itemQuantity}>
            <Text style={{ fontSize: 16 }}>Items</Text>
            <View style={styles.icons}>
              <QuantityIcon
                onPress={() => dispatch(removeFromCart(food))}
                name="minus"
                size={22}
                iconColor={colors.white}
                style={{
                  paddingHorizontal: 4,
                  paddingVertical: 2,
                  borderColor: colors.primary,
                  borderWidth: 1,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  backgroundColor: colors.primary,
                }}
              />

              <TouchableOpacity>
                <View
                  style={{
                    paddingHorizontal: 7,
                    paddingVertical: 2,
                    borderColor: colors.primary,
                    borderWidth: 1,
                    borderLeftWidth: 0,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: colors.primary,
                    }}
                  >
                    {cartFood ? cartFood?.quantity : 0}
                  </Text>
                </View>
              </TouchableOpacity>

              <QuantityIcon
                onPress={() => dispatch(addToCart(food))}
                name="plus"
                size={22}
                iconColor={colors.white}
                style={{
                  paddingHorizontal: 4,
                  paddingVertical: 2,
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

        <Button title="Add to cart" onPress={() => dispatch(addToCart(food))} />
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
