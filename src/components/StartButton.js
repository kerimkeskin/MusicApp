import React from "react";
import { StyleSheet, Text, View ,TouchableOpacity} from "react-native";
import colors from "../assets/colors/colors";
const StartButton = ({goHome}) => {
  return (
    <View style={styles.buttoncontainer}>
      <TouchableOpacity
        activeOpacity="0.75"
        onPress={goHome}
        style={styles.bodybutton}
      >
        <Text style={styles.buttontext}>Başla</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttoncontainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bodybutton: {
    width: 310,
    height: 58,
    backgroundColor: colors.pink,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default StartButton;
