import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Text>Welcome to My App!</Text>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("Signin")}
          title="Continue to Sign in"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("Signup")}
          title="Continue to Sign Up"
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginVertical: 4,
  },
});
