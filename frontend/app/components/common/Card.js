import {
  View,
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";

import Text from "./AppText";
// import Icon from "./Icon";
import colors from "../../confiq/colors";
// import { addToCart } from "../../redux/features/cart/cartSlice";

export default function Card({ name, price, imageUri, onPress }) {
  // const dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} tint="light" source={{ uri: imageUri }} />

        <View style={styles.detailsConTainer}>
          <View style={styles.textConTainer}>
            <Text style={{ fontWeight: "500" }}>{name}</Text>
            <Text style={{ fontWeight: "800", marginTop: 5 }}>
              RM{price.toFixed(2)}
            </Text>
          </View>

          {/* <TouchableOpacity onPress={() => dispatch(addToCart(food))}>
            <Icon name="plus" iconColor="white" size={28} />
          </TouchableOpacity> */}
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
