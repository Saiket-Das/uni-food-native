import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

import Text from "../common/AppText";
import Icon from "../common/Icon";
import colors from "../../confiq/colors";

export default function ListItem({ imageUri, title, subTitle, price }) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}

        <View style={styles.detailsContainer}>
          <Text style={{ fontSize: 16, fontWeight: "700" }}>{title}</Text>
          {subTitle && (
            <Text
              style={{ fontSize: 16, color: colors.darkGray }}
              numberOfLines={1}
            >
              {subTitle}
            </Text>
          )}
          <Text style={{ fontWeight: "700" }}>RM{price.toFixed(2)}</Text>
        </View>

        <Icon name="plus" iconColor="white" size={28} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.light,
    alignItems: "flex-end",
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },

  detailsContainer: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: "center",
    height: 80,
  },
});
