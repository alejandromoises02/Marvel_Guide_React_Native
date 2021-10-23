//React-Native
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Platform } from "react-native";

//Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import GuideScreen from "../../screens/guide/GuideScreen";
import ListScreen from "../../screens/guide/ListScreen";
import DetailScreen from "../../screens/guide/DetailScreen";
import RelatedScreen from "../../screens/guide/RelatedScreen";
import RelatedDetailScreen from "../../screens/guide/RelatedDetailScreen"
//Colors
import { COLORS } from "../../constants/color";

const Stack = createNativeStackNavigator();

const ROUTES = {
  Home: "Home",
  List: "List",
  Detail: "Detail",
  Related: "Related",
  RelatedDetail: "RelatedDetail",
};

const GuideNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? COLORS.redMarvel : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : COLORS.redMarvel,
      headerTitleStyle: {
        fontFamily: "ComicBook"
      }
    }}
  >
    <Stack.Screen
      name={ROUTES.Home}
      options={{
        title: "Guide",
        headerStyle: { backgroundColor: COLORS.redSecondMarvel }
      }}
      component={GuideScreen}
    />
    <Stack.Screen
      name={ROUTES.List}
      options={({ route }) => ({
        title: route.params.name
      })}
      component={ListScreen}
    />
    <Stack.Screen
      name={ROUTES.Detail}
      options={{
        title: "Detail"
      }}
      component={DetailScreen}
    />
    <Stack.Screen
      name={ROUTES.Related}
      options={({ route }) => ({
        title: route.params.name
      })}
      component={RelatedScreen}
    />
    <Stack.Screen
      name={ROUTES.RelatedDetail}
      options={{
        title: "Detail"
      }}
      component={RelatedDetailScreen}
    />
  </Stack.Navigator>
);

export default GuideNavigator;
