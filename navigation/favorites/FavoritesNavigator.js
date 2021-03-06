//react
import React from "react";
//native
import { Platform } from "react-native";
//Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Screens
import FavoritesScreen from '../../screens/favorites/FavoritesScreen'
import FavoriteDetailScreen from '../../screens/favorites/FavoriteDetailScreen'
//Colors
import { COLORS } from "../../constants/color";

const Stack = createNativeStackNavigator();

const ROUTES = {
  FavoritesItems: "FavoritesItems",
  FavoriteDetail:"FavoriteDetail"
};

const FavoritesNavigator = () => (
    <Stack.Navigator
      initialRouteName={ROUTES.FavoritesItems}
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
        name={ROUTES.FavoritesItems}
        options={{
          title: "Favorites",
          headerStyle: { backgroundColor: COLORS.redSecondMarvel }
        }}
        component={FavoritesScreen}
      />
      <Stack.Screen
      name={ROUTES.FavoriteDetail}
      options={{
        title: "Detail"
      }}
      component={FavoriteDetailScreen}
    />
    </Stack.Navigator>
);

export default FavoritesNavigator;
