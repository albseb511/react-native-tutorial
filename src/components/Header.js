import { View, Text, StyleSheet } from "react-native";

function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "teal",
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 25,
    alignSelf: "center",
  },
});

export default Header;
