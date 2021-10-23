//react
import React, { useCallback, useState } from "react";
//native
import { FlatList, StyleSheet, ImageBackground, Text } from "react-native";
//navigation
import { useFocusEffect } from '@react-navigation/native';
//sql
import { fetchFavorite } from '../../db/index'
//components
import ListItem from "../../components/ListItem";
//constants
import { BACK_IMAGE } from "../../constants/backImage";

const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([])


  useFocusEffect(
    useCallback(() => {
      fetchFavorite()
    .then(result => setFavorites(result.rows._array));
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
        <Text style={styles.noFavorites}>No favorites yet</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
  noFavorites:{
    alignSelf: "center",
    justifyContent: "center",
    fontFamily:"Badaboom",
    fontSize:24
  }
});

export default FavoritesScreen;
