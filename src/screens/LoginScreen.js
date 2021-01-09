import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import colors from "../assets/colors/colors";
import PhoneInput from "../components/PhoneInput";
import NextButton from "../components/NextButton";
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
        <View style={styles.signup}>
          <Text style={styles.signuptext}>Üye Ol </Text>
          <Text style={[styles.signuptext, { fontSize: 20 }]}>
            Dinlemeye Başla
          </Text>
        </View>
        <View style={styles.numberwrapper}>
          <Text style={styles.numbertext}>Telefon Numarası</Text>
        </View>
        <PhoneInput />
        <NextButton />
        <View style={styles.signin}>
          <Text style={styles.signintext}>Veya Giriş Yap</Text>
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
  playicon: {
    left: 43,
    top: 191,
  },
  signup: {
    position: "absolute",
    width: 171,
    height: 104,
    top: 281,
    left: 43,
  },
  signuptext: {
    fontSize: 50,
    color: "#fff",
    fontWeight: "500",
  },
  numberwrapper: {
    position: "absolute",
    width: 134,
    height: 19,
    left: 43,
    top: 437,
  },
  numbertext: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
  },
  signin: {
    position: "absolute",

    width: 170,
    height: 35,
    left: 43,
    top: 685,
  },
  signintext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default LoginScreens;
