import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import colors from "../assets/colors/colors";
const LoginScreens = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/loginbg.png")}
        style={styles.background}
      >
        <View style={styles.playicon}>
          <Image source={require("../assets/images/play-icon.png")} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: colors.bg_blue,
  },
});

export default LoginScreens;
