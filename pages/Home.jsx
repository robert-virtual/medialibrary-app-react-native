import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useState } from "react";
import { ImagesGallery } from "../components";

export function Home() {
  const [galleryVisible, setGalleryVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  function showGallery() {
    setGalleryVisible(true);
  }
  return (
    <View style={styles.container}>
      <ImagesGallery setVisible={setGalleryVisible} visible={galleryVisible} />
      <TouchableOpacity onPress={showGallery}>
        <Text>Selecionar foto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
