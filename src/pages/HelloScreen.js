import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorfulButton from "../components/buttons/ColorfulButton";
import Note from "./HelloScreen/Note";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
      <Note />
      <ColorfulButton>Start</ColorfulButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;
