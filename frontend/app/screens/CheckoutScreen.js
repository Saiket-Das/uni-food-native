import { View, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import useAuth from "../auth/useAuth";
import orderApi from "../api/order";
// import routes from "../navigation/routes";
import colors from "../config/colors";

import Screen from "../components/common/Screen";
import Button from "../components/common/AppButton";
import OrderHeader from "../components/cart/OrderHeader";
import TotalAmount from "../components/cart/TotalAmount";
import OrderList from "../components/cart/OrderList";

export default function CartScreen({ navigation }) {
  const foodCart = useSelector((state) => state.cart.cart);

  const { user } = useAuth();

  const orderData = {
    customerId: user._id,
    orderItems: foodCart,
  };

  // console.log("orderData", orderData);

  const handleAddOrder = async () => {
    const result = await orderApi.addOrder(orderData);

    // if (!result.ok) return setLoginFailed(true);

    console.log("Result --> ", result);
  };

  return (
    <Screen style={{ backgroundColor: colors.primary }}>
      <OrderHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 10 }}>
          <TotalAmount foodCart={foodCart} />
          <OrderList foodCart={foodCart} />

          <Button
            title="Checkout"
            // onPress={() => navigation.navigate(routes.PAYMENT)}
            onPress={handleAddOrder}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

// {
//   "customerId": "63542103cb0b015adfb43eb9",
//   "orderItems": [
//      {
//           "_id": "635524d8a8962cac8de081e0",
//           "name": "Milo Ais",
//           "quantity":5,
//           "price": 17.5
//      },

//      {
//           "_id": "635424e06bdb24a70bf4f736",
//           "name": "Nasi",
//           "quantity":5,
//           "price": 45
//      }
//   ]
// }
