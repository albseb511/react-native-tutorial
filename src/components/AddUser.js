import { useState } from "react";
import { View, TextInput, Text, Button, StyleSheet, Image } from "react-native";

function AddUser({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    onSubmit && onSubmit(text);
    setText("");
  };

  return (
    <View style={styles.container}>
      <Text>User</Text>
      <TextInput
        onChangeText={setText}
        value={text}
        placeholder="Add something"
      />
      <Button
        onPress={handleSubmit}
        title="ADD USER"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default AddUser;
