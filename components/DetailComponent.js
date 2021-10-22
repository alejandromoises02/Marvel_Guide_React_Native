//native
import React, { useLayoutEffect, useState } from "react";
//components
import RenderItem from "./RenderItem";
//navigation
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
//sql
import { insertFavorite, fetchFavorite, deleteFavorite } from "../db/index";

const DetailComponent = ({ item, handlerRelated }) => {
  const navigation = useNavigation();
  const [favoritesMark, setFavoritesMark] = useState(false);
  const [iconName, setIconName] = useState("md-bookmark-outline");

  const handlerAddFavorite = () => {
    if (!favoritesMark) {
      insertFavorite(item);
      setFavoritesMark(true);
    } else {
      deleteFavorite(item.id)
        .then((data) => console.log(data))
        .catch((e) => {
          console.log(e);
        });
      setFavoritesMark(false);
    }
  };

  useLayoutEffect(() => {
    let favorites = [];
    fetchFavorite().then((result) => {
      favorites = result.rows._array;
      setFavoritesMark(favorites.some((favorite) => favorite.id == item.id));
      if (favoritesMark) setIconName("md-bookmark");
      else setIconName("md-bookmark-outline");
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

  return <RenderItem item={item} handlerRelated={handlerRelated} />;
};

export default DetailComponent;
