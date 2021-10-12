import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from '../constants/color'

const RenderItem = ({ item }) => {

  const urlImage = item.thumbnail && `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`;

  const description = !item.description
  ?'Description not available'
  :item.description;

  let title = "";

  if (item.pageCount) title = `${item.title} (${item.pageCount}pages)`; //format title for comic
  else if (item.start) title = `${item.title} ${item.start}-${item.end}`;//format title for events
  else if (item.startYear) title = `${item.title} ${item.startYear}-${item.endYear}`;//format title for series
  else title = item.title;//format title for characters


  return (
    <View style={styles.RenderItem}>
      <Image
        style={styles.image}
        source={{
          uri: urlImage
        }}
      />
      <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{description}</Text>
        <Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  RenderItem: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
    margin: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: COLORS.redThirdMarvel,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontFamily: "SFComicScript",
    color: "white"
  },
  image: {
    alignSelf: "center",
    width: 300,
    height: 450,
    borderRadius: 8,
    marginBottom: 20,
  }
});

export default RenderItem;
