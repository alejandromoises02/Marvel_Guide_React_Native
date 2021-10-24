//react
import React from "react";
//native
import {
  FlatList,
  StyleSheet,
  ImageBackground,
  ActivityIndicator
} from "react-native";
//redux
import { useSelector, useDispatch } from "react-redux";
import { selectItem } from "../../store/actions/related.action";
import { selectCategory } from "../../store/actions/categoryRelated.actions";
//components
import ListItem from "../../components/ListItem";
//constants
import { BACK_IMAGE } from "../../constants/backImage";
import { COLORS } from "../../constants/color";

const RelatedScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.related.list);

  const handleSelected = (item) => {
    dispatch(selectCategory("comics"));
    dispatch(selectItem(item.id));
    navigation.navigate("RelatedDetail", {
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
      {list.length == 0 ? (
        <ActivityIndicator size="large" color={COLORS.redThirdMarvel} />
      ) : (
        <FlatList
          data={list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItemList}
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  }
});

export default RelatedScreen;
