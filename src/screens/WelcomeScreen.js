import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import StartButton from "../components/StartButton";

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

const WelcomeScreen = ({ navigation }) => {
  const goHome = () => {
    navigation.navigate("Login");
  };

  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  } else {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/welcomebg.png")}
          style={styles.background}
        >
          <View>
            <View style={styles.headercontainer}>
              <Image source={require("../assets/images/header.png")} />
            </View>
            <View style={styles.body}>
              <View style={styles.bodytitlebox}>
                <Text style={styles.bodytitletext}>Başlamadan Önce..</Text>
              </View>
              <View style={styles.bodybox}>
                <Text style={styles.bodytext}>
                  Evinizden en iyi radyo istasyonlarının keyfini çıkarın, hiçbir
                  şeyi kaçırmayın
                </Text>
              </View>
              <StartButton goHome={goHome} />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
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
  },
  headercontainer: {
    width: "100%",
    height: Height / 4.28,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    width: 310,
    alignSelf: "center",
    height: 625,
  },
  bodytitlebox: {
    width: 241,
    height: 126,
  },
  bodytitletext: {
    fontSize: 37,
    fontWeight: "700",
    lineHeight: 43,
    fontFamily: "Montserrat_600SemiBold",
    color: "white",
  },
  bodybox: {
    width: 204,
    height: 82,
  },
  bodytext: {
    lineHeight: 19,
    fontWeight: "400",
    fontSize: 16,
    color: "white",
    textAlign: "left",
  },
});

export default WelcomeScreen;
