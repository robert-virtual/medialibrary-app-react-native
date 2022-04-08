import {
  Image,
  useWindowDimensions,
  FlatList,
  StyleSheet,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";

const { round } = Math;

export function ImagesGallery({ visible, setVisible }) {
  const [cargando, setCargando] = useState(true);
  const [photos, setPhotos] = useState([]);
  const { width } = useWindowDimensions();
  function hideModal() {
    setVisible(false);
  }
  useEffect(() => {
    checkPermission();
  }, []);

  async function checkPermission() {
    try {
      const permission = await MediaLibrary.requestPermissionsAsync();
      console.log(permission);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal animationType="slide" visible={visible} style={styles.modal}>
      <TouchableOpacity style={styles.close} onPress={hideModal}>
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
      {cargando ? (
        <ActivityIndicator size={"large"} color="blue" />
      ) : (
        <FlatList
          data={photos}
          keyExtractor={(e) => e.id}
          numColumns={round(width / 100)}
          renderItem={({ item }) => (
            <Image source={{ uri: item.uri, width: 100, height: 100 }} />
          )}
        />
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "white",
  },
  close: {
    margin: 15,
  },
});
