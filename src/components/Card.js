import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";

function Card({ first_name, email, avatar, last_name, onPress }) {
  const [isOpen, setOpen] = useState(false);
  console.log(first_name, email, avatar);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: avatar }} style={styles.image} />
        <Text style={styles.text}>{first_name}</Text>
        {/* {isOpen &&<View style={styles.email}>
                    <Text style={styles.text}>
                        {email}
                    </Text>
                </View>} */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: "#cecece",
    padding: 10,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "black",
  },
  text: {
    fontWeight: "bold",
  },
  email: {
    paddingLeft: 20,
    height: 32,
    backgroundColor: "#cecece",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Card;
