//Native
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

//redux
import { Provider } from "react-redux";
import store from "./store";

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

//Navigator
import MainNavigator from './navigation';
import TabNavigator from "./navigation/tab/TabNavigator";

//background
import { COLORS } from "./constants/color";

//db
import { init } from './db';

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
      <TabNavigator />
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
