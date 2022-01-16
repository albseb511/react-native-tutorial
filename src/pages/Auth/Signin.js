import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppContext } from "../../context/AppContext";

const Signin = ({ navigation }) => {
  const [state, dispatch] = React.useContext(AppContext);
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => {
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: {},
          });
        }}
      >
        <Text>SIGNIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
