import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Dashboard/Home";
import Profile from "../pages/Dashboard/Profile";
import UserStackScreen from "./UserStack";

const TabStack = createBottomTabNavigator();
const TabsScreen = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabStack.Screen name="Home" component={UserStackScreen} />
      <TabStack.Screen name="Profile" component={Profile} />
    </TabStack.Navigator>
  );
};

export default TabsScreen;

const styles = StyleSheet.create({});
