import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { COLORS } from '../constants/color'

const RenderItem = ({ item }) => {

  const urlImage = item.thumbnail && `${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`;

  const description = !item.description
  ?'Description not available'
  :item.description;

  let title = "";
  let buttonTitle = ""

  if (item.pageCount){
    //format title for comic
    title = `${item.title} (${item.pageCount}pages)`;
    buttonTitle = `See Related Characters`;
  } 
  else if (item.start){
    //format title for events
    title = `${item.title} ${item.start}-${item.end}`;
    buttonTitle = `See Related Comics`;
  }
  else if (item.startYear){
    //format title for series
    title = `${item.title} ${item.startYear}-${item.endYear}`;
    buttonTitle = `See Related Comics`;
  } 
  else{
    //format title for characters
    title = item.title;
    buttonTitle = `See Related Comics`;
  }


  return (
    <ScrollView style={styles.RenderItem}>
      <Image
        style={styles.image}
        source={{
          uri: urlImage
        }}
      />
      <View style={styles.titleContainer}>
      <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity><Text>{buttonTitle}</Text></TouchableOpacity>
      </View>
    </ScrollView>
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
    fontSize: 25,
    fontFamily: "SFComicScript",
    color: "white"
  },
  description: {
    fontSize: 20,
    fontFamily: "Roboto",
    color: "white"
  },
  image: {
    alignSelf: "center",
    width: 300,
    height: 400,
    borderRadius: 8,
    marginBottom: 20,
  }
});

export default RenderItem;
