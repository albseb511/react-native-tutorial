import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserPage = ({ route, navigation }) => {
  const { id, title } = route.params;
  return (
    <View>
      <Text>User ID: {id}</Text>
      <Text>User ID: {title}</Text>
    </View>
  );
};

export default UserPage;

const styles = StyleSheet.create({});
