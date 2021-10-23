//react
import React from "react";
//native
import { StyleSheet } from "react-native";
//Navigator
import MainNavigator from './navigation';
//redux
import { Provider } from "react-redux";
import store from "./store";
//db
import { init } from './db';
//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
//constants
import { COLORS } from "./constants/color";

init()
  .then(() => console.log('Database initialized'))
  .catch(err => {
    console.log('Database failed to connect');
    console.log(err.message);
  })

export default function App() {
  const [loaded] = useFonts({
    ComicBook: require("./assets/fonts/Comic_Book.otf"),
    SFComicScript: require("./assets/fonts/SF_Comic_Script.ttf"),
    Badaboom: require("./assets/fonts/badaboom.ttf"),
    Roboto: require("./assets/fonts/Roboto-Light.ttf")
  });

  if (!loaded) return <AppLoading />;

  return (
    <Provider store={store} >
      <MainNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.redMarvel,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});
