import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Dashboard/Home";
import UserPage from "../pages/Dashboard/UserPage";

const UserStack = createStackNavigator();
const UserStackScreen = () => {
  return (
    <UserStack.Navigator screenOptions={{ headerShown: false }}>
      <UserStack.Screen name="AllUsers" component={Home} />
      <UserStack.Screen name="User" component={UserPage} />
    </UserStack.Navigator>
  );
};

export default UserStackScreen;

const styles = StyleSheet.create({});
