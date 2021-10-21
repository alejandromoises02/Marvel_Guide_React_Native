//native
import React, { useEffect } from "react";
import { StyleSheet, ImageBackground } from "react-native";
//redux
import { useSelector, useDispatch } from "react-redux";
import { filteredItem } from "../../store/actions/item.actions";
import { clearItem } from "../../store/actions/item.actions";
//components
import DetailComponent from "../../components/DetailComponent";
//constants
import { BACK_IMAGE } from "../../constants/backImage";

const DetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryID = useSelector((state) => state.categories.selectedID);
  const itemID = useSelector((state) => state.list.selectedID);
  const item = useSelector((state) => state.item.item);

  useEffect(() => {
    dispatch(filteredItem(categoryID, itemID));

    return () => {
      dispatch(clearItem());
    };
  }, []);

  return (
    <ImageBackground
      source={BACK_IMAGE}
      resizeMode="cover"
      style={styles.container}
    >
      <DetailComponent item={item} />
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
