//react
import React, { useCallback } from "react";
//native
import { StyleSheet, ImageBackground } from "react-native";
//navigation
import { useFocusEffect } from "@react-navigation/native";
//redux
import { useSelector, useDispatch } from "react-redux";
import { filteredItem, clearItem } from "../../store/actions/itemRelated.actions";
import { selectList } from "../../store/actions/related.action";
//components
import DetailComponent from "../../components/DetailComponent";
//constants
import { BACK_IMAGE } from "../../constants/backImage";

const DetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryID = useSelector((state) => state.categoriesRelated.selectedID);
  const itemID = useSelector((state) => state.related.selectedID);
  const item = useSelector((state) => state.itemRelated.item); 

  /*useEffect(() => {
    dispatch(filteredItem(categoryID, itemID));

    return () => {
      dispatch(clearItem());
    };
  }, []);*/

  useFocusEffect(
    useCallback(() => {
      dispatch(filteredItem(categoryID, itemID));

      return () => {
        dispatch(clearItem());
      };
    }, [])
  );

  const handlerRelated = (item) =>{
    dispatch(selectList(item.categoryID, item.related, item.id));
    navigation.navigate("Related", {
      name: item.related
    });
  }

  return (
    <ImageBackground
      source={BACK_IMAGE}
      resizeMode="cover"
      style={styles.container}
    >
      <DetailComponent item={item} handlerRelated={handlerRelated} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});

export default DetailScreen;
