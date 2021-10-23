//react
import React from "react";
//native
import { StyleSheet, ImageBackground } from "react-native";
//components
import DetailComponent from "../../components/DetailComponent";
//constants
import { BACK_IMAGE } from "../../constants/backImage";

const FavoriteDetailScreen = ({ navigation, route }) => {
  const item = route.params.item;

  return (
    <ImageBackground
      source={BACK_IMAGE}
      resizeMode="cover"
      style={styles.container}
    >
      <DetailComponent item={item} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

export default FavoriteDetailScreen;
