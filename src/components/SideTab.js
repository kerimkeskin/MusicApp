import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import colors from "../assets/colors/colors";

const SideTab = () => {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Image
          style={styles.playicon}
          source={require("../assets/images/play-icon-mini.png")}
        />
      </View>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Text style={[styles.text, { width: 153 }]}>Tüm İstasyonlar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Text style={[styles.text, { top: 497 }]}>Favoriler</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Text style={[styles.text, { top: 627 }]}>Popüler</Text>
        <View style={styles.focus}></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: 79,
    height: 896,
    left: 0,
    top: 0,
    backgroundColor: colors.sidetab_blue,
  },
  playicon: {
    position: "absolute",
    left: 23,
    top: 77,
  },
  text: {
    position: "absolute",
    color: "rgba(255, 255, 255, 0.3)",
    transform: [{ rotate: "-90deg" }],
    width: 97,
    height: 24,
    top: 345,
    fontSize: 20,
    lineHeight: 24,
  },
  focus: {
    width: 15,
    height: 15,
    borderRadius: 40,
    backgroundColor: colors.turquoise,
    position: "absolute",
    top: 702,
  },
});

export default SideTab;
