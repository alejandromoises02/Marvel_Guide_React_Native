//native
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";

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

const DetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryID = useSelector((state) => state.categories.selectedID);
  const itemID = useSelector((state) => state.list.selectedID);
  const item =  useSelector((state) => state.item.item);

  const handlerAddFavorite = (favoriteItem) => {
    console.log(favoriteItem.urlImage);
  };

  useEffect(() => {
    dispatch(filteredItem(categoryID, itemID));

   


    return () => {
      dispatch(clearItem());
    };
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="md-bookmark"
          size={24}
          color="white"
          onPress={() => handlerAddFavorite(item)}
        />
      )
    });
  }, [navigation]);

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
