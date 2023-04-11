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
import colors from "../../config/colors";

export default function ListItem({
  imageUri,
  image,
  title,
  subTitle,
  quantity,
  backgroundColor = colors.light,
  price,
  IconComponent,
  icon,
  iconColor = colors.light,
  iconBackgroundColor = colors.primary,
  size = 28,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { backgroundColor }]}>
        {imageUri && (
          <Image style={styles.imageUri} source={{ uri: imageUri }} />
        )}
        {image && <Image style={styles.image} source={image} />}

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

        {/* {icon && (
          <TouchableOpacity>
            <Icon
              name={icon}
              size={size}
              backgroundColor={iconBackgroundColor}
              iconColor={iconColor}
            />
          </TouchableOpacity>
        )} */}
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
    // alignItems: "flex-end",
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  imageUri: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  detailsContainer: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: "center",
    // height: 80,
  },
});
