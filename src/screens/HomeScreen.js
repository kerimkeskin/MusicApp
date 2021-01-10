import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SideTab from "../components/SideTab";
import colors from "../assets/colors/colors";
import StationCard from "../components/StationCard";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SideTab />
      <View style={styles.header}>
        <Text style={styles.headertext}>Merhaba</Text>
        <Text style={[styles.headertext, { color: colors.pink }]}>KESKİN</Text>
        <View style={styles.pp}></View>
      </View>
      <View style={styles.boxtitle}>
        <Text style={styles.title}>Popüler</Text>
      </View>
      <View style={styles.stationcontainer}>
        <StationCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg_blue,
  },
  header: {
    flexDirection: "row",
    width: 125,
    height: 36,
    position: "absolute",
    top: 71,
    left: 101,
    flex: 1,
  },
  headertext: {
    fontWeight: "500",
    fontSize: 25,
    lineHeight: 30,
    color: "#fff",
    paddingHorizontal: 3,
  },
  pp: {
    width: 40,
    height: 40,
    borderRadius: 60,
    backgroundColor: "#fff",
    marginStart: 50,
  },
  boxtitle: {
    position: "absolute",
    width: 94,
    height: 36,
    left: 103,
    top: 137,
  },
  title: {
    fontWeight: "300",
    fontSize: 30,
    lineHeight: 36,
    color: "#fff",
  },
  stationcontainer: {
    position: "absolute",
    top: 205,
    left: 101,
  },
});

export default HomeScreen;
