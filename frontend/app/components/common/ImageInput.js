import { View, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../confiq/colors";

export default function ImageInput() {
  const [imageUri, setImageUri] = useState([]);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable permission to access the library");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const handlePress = () => {
    if (!imageUri) selectImage();
    Alert.alert("Delete", "Are you sure you want to delete this image?", [
      { text: "Yes", onPress: () => console.log("Deleted photo") },
      { text: "No" },
    ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImageInput.MediaTypeOptions.images,
        quality: 0.5,
      });

      if (!result.cancelled) {
        console.log("Remove iamge");
      }
    } catch (error) {}
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.primary}
            name="camera"
            size={70}
          />
        )}

        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
