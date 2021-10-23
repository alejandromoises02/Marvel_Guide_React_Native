//react
import React, { useState } from "react";
//native
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
//constants
import { COLORS } from "../constants/color";

const InputSearch = ({message,titleButton, onHandleSearch}) =>{
    const [inputSearch, setInputSearch] = useState("");

    const handleChangeText = text => {
        setInputSearch(text);
      };

    return (
       
            <View style={styles.containerSearch}>
              <View style={styles.formControl}>
                <Text style={styles.label}>{message}</Text>
                <TextInput
                  style={styles.input}
                  value={inputSearch}
                  onChangeText={handleChangeText}
                />
              </View>
              <TouchableOpacity onPress={() => onHandleSearch(inputSearch)}>
                <Text style={styles.button}>{titleButton}</Text>
              </TouchableOpacity>
            </View>
      );

};

const styles = StyleSheet.create({
    button: {
      color: COLORS.redMarvel,
      marginVertical: 20,
      paddingTop: 10,
      fontFamily: "ComicBook",
      fontSize: 24
    },
    containerSearch: {
      justifyContent: "center",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      backgroundColor: "white",
      marginHorizontal: 20,
      borderRadius: 10
    },
    formControl: {
      width: '100%',
    },
    label: {
      alignSelf:'center',
      fontFamily: 'ComicBook',
      marginVertical: 8,
      color:COLORS.redMarvel
    },
    input: {
      paddingHorizontal: 2,
      paddingVertical: 5,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      fontFamily: 'ComicBook',
    },
  });

export default InputSearch