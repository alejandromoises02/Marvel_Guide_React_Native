import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth.action";
import { BACK_IMAGE } from "../../constants/backImage";
import { COLORS } from "../../constants/color";

const UserScreens = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);

  return (
    <ImageBackground
      source={BACK_IMAGE}
      resizeMode="cover"
      style={styles.containerBack}
    >
      <View style={styles.container}>
        <View style={styles.dates}>
          <Text style={styles.label}>USER</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(logout());
          }}
        >
          <Text style={styles.button}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  containerBack: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    color: COLORS.redMarvel,
    marginVertical: 20,
    paddingTop: 10,
    fontFamily: "ComicBook",
    fontSize: 24
  },
  container: {
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
  dates: {
    width: "100%"
  },
  label: {
    alignSelf: "center",
    fontFamily: "ComicBook",
    marginVertical: 8,
    color: COLORS.redMarvel
  },
  email: {
    alignSelf: "center",
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    fontFamily: "Roboto"
  }
});

export default UserScreens;
