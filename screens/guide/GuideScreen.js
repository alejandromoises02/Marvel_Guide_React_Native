//react
import React, { useCallback } from "react";
//native
import { FlatList, StyleSheet, ImageBackground } from "react-native";
//navigate
import { useFocusEffect } from "@react-navigation/native";
//redux
import { useSelector, useDispatch } from "react-redux";
import { selectCategory } from "../../store/actions/category.actions";
import { clearList } from "../../store/actions/list.actions";
//components
import GridList from "../../components/GridList";
import HeaderList from "../../components/HeaderList";
//constants
import { BACK_IMAGE } from "../../constants/backImage";

const GuideScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);

  /*useEffect(() => {
    dispatch(clearList());
  }, [])*/

  useFocusEffect(
    useCallback(() => {
      dispatch(clearList());
    }, [])
  );

  const handleSelectedCategory = (category) => {
    dispatch(selectCategory(category.id));
    navigation.navigate("List", {
      name: category.title
    });
  };

  const renderGridList = ({ item }) => (
    <GridList item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <ImageBackground source={BACK_IMAGE} resizeMode="cover" style={styles.image}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderGridList}
        numColumns={1}
        ListHeaderComponent={<HeaderList />}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  }
});

export default GuideScreen;
