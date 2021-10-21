//native
import React, { useCallback, useState, useLayoutEffect, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  ImageBackground,
} from "react-native";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectList,
  addItemList,
  selectItem,
  selectSearchList
} from "../../store/actions/list.actions";
//components
import ListItem from "../../components/ListItem";
import InputSearch from "../../components/InputSearch";
//constants
import { BACK_IMAGE } from "../../constants/backImage";
//navigation
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryID = useSelector((state) => state.categories.selectedID);
  const list = useSelector((state) => state.list.list);
  const inputSearch = useSelector((state) => state.list.search);

  const [activeSearch, setActiveSearch] = useState(false);
  const [page, setPage] = useState(1);

  useFocusEffect(
    useCallback(() => {
      dispatch(selectList(categoryID,inputSearch));
    }, [categoryID,inputSearch])
  );

  const handlerSearch = () => {
    setActiveSearch(!activeSearch);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="md-search-sharp"
          size={24}
          color="white"
          onPress={() => handlerSearch()}
        />
      )
    });
  }, [activeSearch]);

  const handleSelected = (item) => {
    dispatch(selectItem(item.id));
    navigation.navigate("Detail", {
      name: item.title
    });
  };

  const LoadMoreData = () => {
    setPage(page + 1);
    dispatch(addItemList(categoryID, inputSearch, page));
  };

  const renderItemList = ({ item }) => (
    <ListItem item={item} onSelected={handleSelected} />
  );

  const onHandleSearch = text => {
    dispatch(selectList(categoryID , text));
    setActiveSearch(false);
    dispatch(selectSearchList(text));
  };

  return (
    <ImageBackground
      source={BACK_IMAGE}
      resizeMode="cover"
      style={styles.image}
    >
      {activeSearch ? (
        <InputSearch
          message="Enter what you want to Search"
          titleButton="Search"
          onHandleSearch={onHandleSearch}
        />
      ) : (
        <FlatList
          data={list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItemList}
          onEndReachedThreshold={0.5}
          onEndReached={() => LoadMoreData()}
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default ListScreen;
