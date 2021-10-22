import React, { useEffect, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

//constants
import { COLORS } from "../constants/color";

const RenderItem = ({ item, handlerRelated }) => {
  return (
    <View style={styles.RenderItem}>
      <ScrollView style={styles.scrollArea}>
        <Image
          style={styles.image}
          source={{
            uri: item.urlImage
          }}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </ScrollView>
      {item.buttonTitle != "" && (
        <TouchableOpacity onPress={() => handlerRelated(item)}>
          <Text style={styles.button}>{item.buttonTitle}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  RenderItem: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: COLORS.redThirdMarvel
  },
  scrollArea: {
    marginBottom: 5
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    fontFamily: "SFComicScript",
    color: "white",
    marginBottom: 10
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
    marginBottom: 20
  },
  button: {
    alignSelf: "center",
    fontSize: 25,
    fontFamily: "SFComicScript",
    color: "white"
  }
});

export default RenderItem;
