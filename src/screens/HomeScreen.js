import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SideTab from "../components/SideTab";
import colors from "../assets/colors/colors";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <SideTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg_blue,
  },
});

export default HomeScreen;
