import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../assets/colors/colors";

const NextButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity="0.7"
      style={styles.container}
    >
      <Image source={require("../assets/images/forward-icon.png")} />
    </TouchableOpacity>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 153,
    height: 62,
    top: 599,
    left: 43,
    borderRadius: 10,
    backgroundColor: colors.turquoise,
    justifyContent: "center",
    alignItems: "center",
  },
});
