import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Slider from "@react-native-community/slider";
import colors from "../assets/colors/colors";
import { AntDesign } from "@expo/vector-icons";
const SliderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <AntDesign
          style={{ paddingEnd: 10 }}
          name="sound"
          size={24}
          color={colors.border_gray}
        />
        <Slider
          style={{ width: 196, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          thumbTintColor={colors.turquoise}
          minimumTrackTintColor={colors.turquoise}
          maximumTrackTintColor={colors.border_gray}
        />
        <Text style={styles.text}>%65</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    bottom: 40,
    zIndex: -1,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "flex-end",
    right: 35,
    alignItems: "center",
    width: "100%",
  },
  text: {
    color: "#fff",
    paddingStart: 10,
    fontSize: 16,
  },
});

export default SliderComponent;
