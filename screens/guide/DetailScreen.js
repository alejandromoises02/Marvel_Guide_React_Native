//native
import React, { useEffect, useCallback } from "react";
import { StyleSheet, ImageBackground } from "react-native";
//redux
import { useSelector, useDispatch } from "react-redux";
import { filteredItem, clearItem } from "../../store/actions/item.actions";
import { clearListRelated, selectList } from "../../store/actions/related.action";
import { clearList } from "../../store/actions/list.actions";
//components
import DetailComponent from "../../components/DetailComponent";
//constants
import { BACK_IMAGE } from "../../constants/backImage";
//navigation
import { useFocusEffect } from "@react-navigation/native";

const DetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryID = useSelector((state) => state.categories.selectedID);
  const itemID = useSelector((state) => state.list.selectedID);
  const item = useSelector((state) => state.item.item); 

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
    dispatch(clearList());
    dispatch(clearListRelated());
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
