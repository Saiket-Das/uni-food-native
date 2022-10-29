import { Image, StyleSheet } from "react-native";
import React from "react";

export default function Avatar({ imageURL }) {
  return (
    <Image style={[styles.image]} tint="light" source={{ uri: imageURL }} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 42,
    height: 42,
    borderRadius: 42 * 0.5,
  },
});
