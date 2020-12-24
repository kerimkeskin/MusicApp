import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/welcomebg.png")}
        style={styles.background}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#01012A",
  },
});

export default WelcomeScreen;
