import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const PlayStopButton = () => {
  const [play, setplay] = useState(true);

  const change = () => {
    setplay(!play);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backward}>
        <Image source={require("../assets/images/backward.png")} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.forward}>
        <Image source={require("../assets/images/forward.png")} />
      </TouchableOpacity>
      <View style={styles.playstop}>
        <Image source={require("../assets/images/play-stop.png")} />
      </View>
      <View style={styles.icon}>
        {play ? (
          <TouchableOpacity onPress={change}>
            <FontAwesome5 name="play" size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={change}>
            <FontAwesome5 name="stop" size={24} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backward: {
    position: "absolute",
    left: 117,
    top: 734,
  },
  forward: {
    position: "absolute",
    left: 324,
    top: 734,
  },
  playstop: {
    position: "absolute",
    left: 181,
    top: 694,
  },
  icon: {
    width: 37,
    height: 37,
    position: "absolute",
    left: 226,
    top: 739,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlayStopButton;
