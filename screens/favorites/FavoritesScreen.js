import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, ImageBackground, Text } from "react-native";

//navigation
import { useFocusEffect } from '@react-navigation/native';

import { fetchFavorite } from '../../db/index'
import { BACK_IMAGE } from "../../constants/backImage";
import ListItem from "../../components/ListItem";

const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([])


  useFocusEffect(
    useCallback(() => {
      fetchFavorite()
    .then(result => setFavorites(result.rows._array));

      return () => console.log("salio de favoritos");
    }, [])
  );

  
    const handleSelected = (item) => {
      navigation.navigate('FavoriteDetail', {
        item
      });
    } 

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
