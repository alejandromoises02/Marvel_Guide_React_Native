import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../store/actions/category.actions";

import ListItem from "./ListItem";
import { COLORS } from "../constants/color";

import { useNavigation } from "@react-navigation/core";

const HeaderList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const populars = useSelector((state) => state.populars.list);

  const handleSelected = (category) => {
    dispatch(selectCategory(category.id));
    navigation.navigate("List", {
      name: category.title
    });
  };

  const renderItemList = ({ item }) => (
    <ListItem item={item} onSelected={handleSelected} />
  );

  return (
    <FlatList
      data={populars}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItemList}
      horizontal={true}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    padding: 20,
    margin: 10,
    borderRadius: 6,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: COLORS.redSecondMarvel
  },
  titleContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    fontFamily: "SFComicScript",
    color: "white"
  },
  logo: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 6,
    marginRight: 30
  }
});

export default HeaderList;
