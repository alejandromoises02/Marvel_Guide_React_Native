//native
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, ImageBackground, Alert } from "react-native";

//redux
import { useSelector, useDispatch } from "react-redux";
import { filteredItem } from "../../store/actions/item.actions";
import { clearItem } from "../../store/actions/item.actions";

//components
import RenderItem from "../../components/RenderItem";

//constants
import { BACK_IMAGE } from "../../constants/backImage";
import { COLORS } from "../../constants/color";

//navigation
import { Ionicons } from "@expo/vector-icons";

//sql
import { insertFavorite, fetchFavorite, deleteFavorite } from "../../db";

const DetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryID = useSelector((state) => state.categories.selectedID);
  const itemID = useSelector((state) => state.list.selectedID);
  const item = useSelector((state) => state.item.item);

  const [favoritesMark, setFavoritesMark] = useState(false);
  const [iconName, setIconName] = useState("md-bookmark-outline");

  useEffect(() => {
    dispatch(filteredItem(categoryID, itemID));

    return () => {
      dispatch(clearItem());
    };
  }, []);

  const handlerAddFavorite = () => {
    if (!favoritesMark) {
      insertFavorite(item);
      setFavoritesMark(true);
    } else {
      deleteFavorite(item.id).then((data) => setFavoritesMark(false));
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

export default DetailScreen;
