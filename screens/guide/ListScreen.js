//native
import React, { useCallback } from "react";
import { FlatList, StyleSheet, ImageBackground } from "react-native";

//redux
import { useSelector, useDispatch } from "react-redux";
import { selectList } from "../../store/actions/list.actions";
import { selectItem } from "../../store/actions/list.actions";

//components
import ListItem from "../../components/ListItem";

//constants
import { BACK_IMAGE } from "../../constants/backImage";

//navigation
import { useFocusEffect } from '@react-navigation/native';

const ListScreen = ({ navigation }) => {
  
  const dispatch = useDispatch();
  const categoryID = useSelector((state) => state.categories.selectedID);

  useFocusEffect(
    useCallback(() => {
      dispatch(selectList(categoryID));

      return () => dispatch(selectList());
    }, [categoryID])
  );
  

  const list = useSelector((state) => state.list.list);

  const handleSelected = (item) => {
    dispatch(selectItem(item.id));
    navigation.navigate("Detail", {
      name: item.title
    });
  };

  const renderItemList = ({ item }) => (
    <ListItem item={item} onSelected={handleSelected} />
  );

  return (
    <ImageBackground
      source={BACK_IMAGE}
      resizeMode="cover"
      style={styles.image}
    >
      <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItemList}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ListScreen;
