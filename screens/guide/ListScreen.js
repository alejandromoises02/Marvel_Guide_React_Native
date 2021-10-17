//native
import React, { useCallback, useState, useLayoutEffect } from "react";
import {
  View,
  Button,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
//redux
import { useSelector, useDispatch } from "react-redux";
import {
  selectList,
  addItemList,
  selectItem
} from "../../store/actions/list.actions";
//components
import ListItem from "../../components/ListItem";
import Input from "../../components/Input";
//constants
import { BACK_IMAGE } from "../../constants/backImage";
import { COLORS } from "../../constants/color";
//navigation
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryID = useSelector((state) => state.categories.selectedID);

  const [activeSearch, setActiveSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  let list = useSelector((state) => state.list.list);

  useFocusEffect(
    useCallback(() => {
      dispatch(selectList(categoryID));

      return () => dispatch(selectList());
    }, [categoryID])
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
    dispatch(addItemList(categoryID, page));
  };

  const renderItemList = ({ item }) => (
    <ListItem item={item} onSelected={handleSelected} />
  );

  const onInputChangeHandler = () => {};

  const handleSearch = () => {};

  return (
    <ImageBackground
      source={BACK_IMAGE}
      resizeMode="cover"
      style={styles.image}
    >
      {activeSearch ? (
        <View style={styles.containerSearch}>
          <Input
            id="Search"
            label="Enter what you want to search"
            keyboardType="default"
            autoCapitalize="none"
            text
            onInputChange={onInputChangeHandler}
          />
          <TouchableOpacity
            onPress={()=>handleSearch()}
          >
            <Text style={styles.button}>Search</Text>
          </TouchableOpacity>
        </View>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    color: COLORS.redMarvel,
    marginVertical: 20,
    paddingTop: 10,
    fontFamily: 'ComicBook',
    fontSize:24,
  },
  containerSearch: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 10
  }
});

export default ListScreen;
