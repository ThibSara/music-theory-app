//colorful grdient button in react native
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ColorfulButton({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.button}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.text}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
