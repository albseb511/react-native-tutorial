import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import Card from "./src/components/Card";
import Header from "./src/components/Header";
import axios from "axios";
import AddUser from "./src/components/AddUser";
import { v4 as uuid } from "uuid";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthStackComponent from "./src/stacks/AuthStack";
import AppContextProvider, { AppContext } from "./src/context/AppContext";
import DashboardStackComponent from "./src/stacks/DashboardStack";

const RootStack = createStackNavigator();

const RootApplication = () => {
  const [state, dispatch] = useContext(AppContext);
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {state.auth ? (
        <RootStack.Screen
          name="Dashboard"
          component={DashboardStackComponent}
        />
      ) : (
        <RootStack.Screen name="Auth" component={AuthStackComponent} />
      )}
    </RootStack.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContextProvider>
        <NavigationContainer>
          <RootApplication />
        </NavigationContainer>
      </AppContextProvider>
    </SafeAreaProvider>
  );
}

// * we will dispaly a set of data
// * we can use input boxes
// * different core components in RN
// * how to work with lists
