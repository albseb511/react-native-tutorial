import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../../components/Card";

export const userData = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
  },
];

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchUsers = () => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      resolve(userData);
    })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        // manage error
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(data);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(data) => data.id}
        renderItem={({ item }) => (
          <Card
            onPress={() =>
              navigation.push("User", {
                id: item.id,
                title: item.first_name,
              })
            }
            {...item}
          />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
  
