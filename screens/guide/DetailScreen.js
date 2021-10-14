//native
import React, { useEffect } from "react";
import { StyleSheet, ImageBackground } from "react-native";

//redux
import { useSelector, useDispatch } from "react-redux";
import { filteredItem } from "../../store/actions/item.actions";

//components
import RenderItem from "../../components/RenderItem";

//constants
import { BACK_IMAGE } from "../../constants/backImage";

const DetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categoryID = useSelector((state) => state.categories.selectedID);
  const itemID = useSelector((state) => state.list.selectedID);

  useEffect(() => {
    dispatch(filteredItem(categoryID, itemID));
    return () => {
      dispatch(filteredItem(undefined, undefined));
    };
  }, [itemID]);

  const item = useSelector((state) => state.item.item);

  return (
    <ImageBackground
      source={BACK_IMAGE}
      resizeMode="cover"
      style={styles.image}
    >
      <RenderItem item={item} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center"
  }
});

export default DetailScreen;
