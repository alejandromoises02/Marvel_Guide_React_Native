import React from "react";
import { FlatList, StyleSheet, ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import GridList from "../../components/GridList";
import { selectCategory } from "../../store/actions/category.actions";
import { BACK_IMAGE } from "../../constants/backImage";

const GuideScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);

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
