import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";

import Text from "../common/AppText";
import Icon from "../common/Icon";
import colors from "../../confiq/colors";

export default function ListItem({
  imageUri,
  title,
  subTitle,
  quantity,
  price,
  IconComponent,
  icon,
  backgroundColor,
  iconColor,
  size = 28,
}) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
        {IconComponent}

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
          {quantity && (
            <Text
              style={{ fontSize: 16, color: colors.darkGray }}
              numberOfLines={1}
            >
              {quantity}x
            </Text>
          )}
          {price && (
            <Text style={{ fontWeight: "700" }}>RM{price.toFixed(2)}</Text>
          )}
        </View>

        {icon && (
          <TouchableOpacity>
            <Icon
              name={icon}
              size={size}
              backgroundColor={backgroundColor}
              iconColor={iconColor}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: colors.light,
    alignItems: "flex-end",
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
    // height: 80,
  },
});
