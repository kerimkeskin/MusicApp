import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
const StationCard = ({ color, station, rad_name }) => {
  const [focus, setfocus] = useState(true);

  const isfocused = { backgroundColor: colors.pink, borderWidth: 0 };
  const notfocused = { backgroundColor: colors.bg_blue, borderWidth: 2 };

  return (
    <TouchableOpacity
      onPress={() => {
        setfocus(!focus);
      }}
      activeOpacity="1"
      style={[styles.container, focus ? isfocused : notfocused]}
    >
      <View style={styles.icon}>
        {focus ? (
          <AntDesign name="heart" size={20} color="white" />
        ) : (
          <AntDesign name="hearto" size={20} color="white" />
        )}
      </View>
      <View style={styles.frequency}>
        <Text
          style={{
            fontSize: 30,
            lineHeight: 36,
            fontWeight: "bold",
            color: focus ? "#fff" : "rgba(255, 255, 255, 0.2)",
          }}
        >
          {station}
        </Text>
      </View>
      <View style={styles.namewrapper}>
        <Text
          style={{
            fontSize: 17,
            lineHeight: 18,
            fontWeight: "normal",
            color: focus ? "#fff" : "rgba(255, 255, 255, 0.2)",
            textAlign: "center",
          }}
        >
          {rad_name}
        </Text>
      </View>
      <View style={styles.vector}>
        <View style={[styles.circle, { backgroundColor: `${color}` }]}></View>
        {focus ? (
          <Image source={require("../assets/images/vector.png")} />
        ) : (
          <Image source={require("../assets/images/Vector-gray.png")} />
        )}
        <View
          style={[
            styles.circle,
            { backgroundColor: `${color}` },
            { left: 107 },
          ]}
        ></View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 139,
    height: 139,
    borderRadius: 15,
    borderColor: colors.border_gray,
    marginEnd: 15,
    marginTop: 15,
  },
  frequency: {
    width: 66,
    height: 36,
    position: "absolute",
    left: 37,
    top: 35,
  },
  frequencytext: {},
  namewrapper: {
    top: 32,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  vector: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    position: "absolute",
    left: 22,
    bottom: 26,
    zIndex: 22,
    width: 8.25,
    height: 8.25,
    borderRadius: 30,
  },
  icon: {
    right: 10,
    top: 10,
    alignItems: "flex-end",
  },
});

export default StationCard;
