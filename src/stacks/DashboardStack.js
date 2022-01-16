import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Dashboard/Home";
import Profile from "../pages/Dashboard/Profile";
import UserPage from "../pages/Dashboard/UserPage";
import TabsScreen from "./TabsScreen";

const DashboardDrawer = createDrawerNavigator();

const DashboardStackComponent = (props) => {
  return (
    <DashboardDrawer.Navigator {...props}>
      <DashboardDrawer.Screen
        name="Tabs"
        component={TabsScreen}
        options={{ title: "Home" }}
      />
      <DashboardDrawer.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile" }}
      />
    </DashboardDrawer.Navigator>
  );
};

export default DashboardStackComponent;
