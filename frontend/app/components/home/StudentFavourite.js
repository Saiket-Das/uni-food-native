import { View, StyleSheet, FlatList } from "react-native";
import React, { useEffect } from "react";

import useApi from "../../hooks/useApi";
import foodApi from "../../api/food";

import Text from "../common/AppText";
import Card from "../common/Card";

export default function StudentFavourite() {
  const favFoodData = useApi(foodApi.getStudentsFavouriteFood);

  useEffect(() => {
    favFoodData.request();
  }, []);

  return (
    <View>
      <Text style={{ fontWeight: "700", fontSize: 22, marginVertical: 10 }}>
        Students favourite
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={favFoodData.data.data}
        keyExtractor={(food) => food._id}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            name={item.name}
            price={item.price}
            imageUri={item.imageURL}
            onPress={() => navigation.navigate(routes.FOOD_DETAILS, item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
  },
});
