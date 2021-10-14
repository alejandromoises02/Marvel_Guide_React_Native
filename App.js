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
import GuideNavigator from "./navigation/GuideNavigator";

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
      <GuideNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
