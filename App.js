//Native
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, ImageBackground } from "react-native";

//redux
import { Provider } from "react-redux";
import store from "./store";

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

//Navigator
import TabNavigator from "./navigation/tab/TabNavigator";

//background
import { BACK_IMAGE } from './constants/backImage'

export default function App() {
  const [loaded] = useFonts({
    ComicBook: require("./assets/fonts/Comic_Book.otf"),
    SFComicScript: require("./assets/fonts/SF_Comic_Script.ttf"),
    Badaboom: require("./assets/fonts/badaboom.ttf"),
    Roboto: require("./assets/fonts/Roboto-Light.ttf")
  });

  if (!loaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <ImageBackground source={BACK_IMAGE} resizeMode="cover" style={styles.image}>
      <TabNavigator />
      </ImageBackground>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});
