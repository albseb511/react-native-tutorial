import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../pages/Auth/Welcome";
import Signin from "../pages/Auth/Signin";
import Signup from "../pages/Auth/Signup";

const AuthStack = createStackNavigator();

const AuthStackComponent = (props) => {
  const isLoggedIn = true;

  return (
    <AuthStack.Navigator {...props}>
      <AuthStack.Screen
        name="Authentication"
        component={Welcome}
        options={{ title: "Welcome" }}
      />
      <AuthStack.Screen
        name="Signin"
        component={Signin}
        options={{ title: "Sign In" }}
      />
      <AuthStack.Screen
        name="Signup"
        component={Signup}
        options={{ title: "Sign up" }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackComponent;
