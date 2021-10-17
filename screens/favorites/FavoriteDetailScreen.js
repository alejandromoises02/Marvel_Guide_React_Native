//native
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, ImageBackground, Alert } from "react-native";

//components
import RenderItem from "../../components/RenderItem";

//constants
import { BACK_IMAGE } from "../../constants/backImage";
import { COLORS } from "../../constants/color";

//navigation
import { Ionicons } from "@expo/vector-icons";

//sql
import { insertFavorite, fetchFavorite } from "../../db";

const FavoriteDetailScreen = ({ navigation, route }) => {

  const item = route.params.item;

  const [favoritesMark, setFavoritesMark] = useState(false);
  const [iconName, setIconName] = useState("md-bookmark-outline");

  const handlerAddFavorite = () => {
    if (!favoritesMark) {
      insertFavorite(item);
      setFavoritesMark(true);
    }else {
      Alert.alert(
        "Has already been added to your favorites",
        "You can see it in the Favorites section",
        [{ text: "OK" }]
      );
    }
  };

  useLayoutEffect(() => {
    let favorites = [];
    fetchFavorite().then((result) => {
      favorites = result.rows._array;
      setFavoritesMark(favorites.some((favorite) => favorite.id == item.id));
      if (favoritesMark) setIconName("md-bookmark");
    });

    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name={iconName}
          size={24}
          color="white"
          onPress={() => handlerAddFavorite()}
        />
      )
    });
  }, [navigation, item, favoritesMark, iconName]);

  return (
    <ImageBackground
      source={BACK_IMAGE}
      resizeMode="cover"
      style={styles.container}
    >
      <RenderItem item={item} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    alignSelf: "center",
    fontSize: 30,
    fontFamily: "Badaboom",
    color: COLORS.redSecondMarvel
  }
});

export default FavoriteDetailScreen;