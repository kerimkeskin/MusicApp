import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import SideTab from "../components/SideTab";
import colors from "../assets/colors/colors";
import PlayStopButton from "../components/PlayStopButton";
import SliderComponent from "../components/SliderComponent";
import { AntDesign } from "@expo/vector-icons";

const DetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SideTab />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={styles.backward}
      >
        <Image
          style={{ width: 36, height: 27 }}
          source={require("../assets/images/back.png")}
        />
      </TouchableOpacity>

      <Image
        style={styles.pp}
        source={require("../assets/images/profile.png")}
      />

      <View style={styles.headerbox}>
        <Text style={styles.headertext}>Şuan da oynatılıyor</Text>
      </View>
      <View style={styles.favorite}>
        <AntDesign name="heart" size={20} color={colors.pink} />
      </View>
      <View style={styles.body}>
        <View style={styles.stationwrapper}>
          <Text style={styles.stationnumber}>89.0</Text>
          <Text style={styles.stationname}>Joy Türk</Text>
        </View>
        <Image
          style={{ position: "absolute" }}
          source={require("../assets/images/Frame.png")}
        />
        <View style={styles.best}>
          <Text style={styles.besttext}>Top 20 </Text>
          <Text
            style={[
              styles.besttext,
              { fontSize: 12, fontWeight: "normal", opacity: 0.8 },
            ]}
          >
            En iyi Müzikler{" "}
          </Text>
        </View>
      </View>
      <PlayStopButton />
      <SliderComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg_blue,
  },
  backward: {
    position: "absolute",
    left: 106,
    top: 82,
  },
  pp: {
    width: 40,
    height: 40,
    borderRadius: 60,
    backgroundColor: "#fff",
    marginStart: 50,
    position: "absolute",
    left: 300,
    top: 75,
  },
  headerbox: {
    position: "absolute",
    top: 141,
    left: 178,
  },
  headertext: {
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 24,
    color: "#fff",
  },
  favorite: {
    position: "absolute",
    top: 144,
    left: 362,
  },
  body: {
    width: 372,
    height: 448,
    position: "absolute",
    top: 188,
    left: 72,
  },
  stationwrapper: {
    width: 119,
    height: 59,
    top: 33,
    left: 153,
    alignItems: "center",
  },
  stationname: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  stationnumber: {
    fontSize: 39,
    color: "#fff",
    fontWeight: "bold",
  },
  best: {
    position: "absolute",
    left: 218,
    bottom: 43,
    width: 87,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  besttext: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "600",
  },
});

export default DetailScreen;
