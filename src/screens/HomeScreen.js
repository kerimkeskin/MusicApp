import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SideTab from "../components/SideTab";
import colors from "../assets/colors/colors";
import StationCard from "../components/StationCard";
import PlayStopButton from "../components/PlayStopButton";

import SliderComponent from "../components/SliderComponent";
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
      <ScrollView style={styles.stationcontainer}>
        <View style={{ flexDirection: "row" }}>
          <StationCard color="purple" station="96.4" rad_name="Slow Türk" />
          <StationCard color="yellow" station="92.0" rad_name="Kral FM" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <StationCard color="red" station="89.0" rad_name="Joy Türk" />
          <StationCard color="green" station="90.8" rad_name="Süper FM" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <StationCard color="orange" station="87.5" rad_name="Damla FM" />
          <StationCard color="gray" station="97.2" rad_name="Metro FM" />
        </View>
      </ScrollView>
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
