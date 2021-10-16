import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, ImageBackground, Text } from "react-native";

import { useFocusEffect } from "@react-navigation/native";
import { fetchAddresses } from "../../db";
import { BACK_IMAGE } from "../../constants/backImage";
import ListItem from "../../components/ListItem";

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);
  const [favorites2, setFavorites2] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const result = fetchAddresses();
      result.then((data) => {
        setFavorites2(data.rows._array);
        console.log(favorites2);
        if(favorites2.length > 0){
            const urlImage = favorites2.urlImager.split(".");
            const thumbnail={
                path:urlImage[0],
                extension: urlImage[1],
            }
            setFavorites2(...favorites2, thumbnail)
            console.log(favorites2);
        }
        
      });
    }, [])
  );

  const handleSelected = (item) => {
    console.log("ver item");
  };

  const renderItemList = ({ item }) => (
    <ListItem item={item} onSelected={handleSelected} />
  );

  return (
    <>
      {favorites.length > 0 ? (
        <ImageBackground
          source={BACK_IMAGE}
          resizeMode="cover"
          style={styles.image}
        >
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItemList}
          />
        </ImageBackground>
      ) : (
        <Text>No tienes favoritos</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  }
});

export default FavoritesScreen;
