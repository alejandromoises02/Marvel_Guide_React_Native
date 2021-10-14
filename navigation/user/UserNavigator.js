//React-Native
import React from "react";
import { Platform } from "react-native";

//Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import UserScreen from '../../screens/user/UserScreens'

//Colors
import { COLORS } from "../../constants/color";

const Stack = createNativeStackNavigator();

const ROUTES = {
  UserData: "UserData",
};

const UserNavigator = () => (
    <Stack.Navigator
      initialRouteName="User"
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
        name={ROUTES.UserData}
        options={{
          title: "User",
          headerStyle: { backgroundColor: COLORS.redSecondMarvel }
        }}
        component={UserScreen}
      />
    </Stack.Navigator>
);

export default UserNavigator;