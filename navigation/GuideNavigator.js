//React-Native
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Platform } from "react-native";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import GuideScreen from "../screens/GuideScreen";
import ListScreen from "../screens/ListScreen";
import DetailScreen from "../screens/DetailScreen";

//Colors
import { COLORS } from "../constants/color";

const Stack = createNativeStackNavigator();

const ROUTES = {
  Home: "Home",
  List: "List",
  Detail: "Detail"
};

const GuideNavigator = () => (
  <NavigationContainer>
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
          title: "Detail",
        }}
        component={DetailScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default GuideNavigator;
