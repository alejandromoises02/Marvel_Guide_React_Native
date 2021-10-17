//native
import React from "react";
import { StyleSheet, View, Text } from "react-native";

//tab navigator
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import GuideNavigator from "../guide/GuideNavigator";
import FavoritesNavigator from "../favorites/FavoritesNavigator";
import UserNavigator from "../user/UserNavigator";
import { BlurView } from "expo-blur";

//color
import { COLORS } from "../../constants/color";

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => (
    <BottomTabs.Navigator
      initialRouteName="Guide"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBackground: () => <BlurView tint="light" intensity={80} />,
        tabBarStyle: styles.tabBar ,
      }}
    >
      <BottomTabs.Screen
        name="Guide"
        component={GuideNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.item}>
              <Ionicons
                name="md-book"
                size={24}
                color='white'
              />
              <Text style={styles.titleIcon}>Guide</Text>
            </View>
          )
        }}
      />
      <BottomTabs.Screen
        name="Favorites"
        component={FavoritesNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.item}>
              <Ionicons
                name="md-bookmarks"
                size={24}
                color='white'
              />
              <Text style={styles.titleIcon}>Favorites</Text>
            </View>
          )
        }}
      />
      <BottomTabs.Screen
        name="User"
        component={UserNavigator}
        options={{
          tabBarIcon: () => (
            <View style={styles.item}>
              <Ionicons
                name="md-person-circle"
                size={24}
                color='white'
              />
              <Text style={styles.titleIcon}>User</Text>
            </View>
          )
        }}
      />
    </BottomTabs.Navigator>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  titleIcon: {
    fontFamily: "Badaboom",
    color: 'white'
  },
  tabBar: {
    backgroundColor:COLORS.redMarvel,
  },


});

export default TabNavigator;
