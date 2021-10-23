//react
import React from "react";
//native
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

const GridList = ({ item, onSelected }) => {
  return (
    <View style={styles.GridList}>
      <ImageBackground
        source={{ uri: item.background }}
        resizeMode="cover"
        style={styles.image}
      >
        <TouchableOpacity
          style={{ ...styles.container }}
          onPress={() => onSelected(item)}
        >
          <View>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  GridList: {
    flex: 1,
    borderRadius: 6,
    margin: 15,
    height: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    borderRadius: 6,

    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 8
  },
  title: {
    fontFamily: "SFComicScript",
    fontSize: 40,
    textAlign: "right",
    color: "white"
  }
});

export default GridList;
