import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import colors from "../assets/colors/colors";
const PhoneInput = () => {
  return (
    <View style={styles.inputcontainer}>
      <TextInput
        style={styles.input}
        selectionColor="#fff"
        placeholder="Telefon Numarası"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputcontainer: {
    position: "absolute",
    width: 338,
    height: 53,
    top: 473,
    left: 43,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.pink,
    shadowColor: colors.pink,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  input: {
    color: "#fff",
    height: 53,
    marginHorizontal: 20,
  },
});

export default PhoneInput;
