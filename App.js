import React from "react";
import { StyleSheet, View } from "react-native";
import Navigator from "./src/navigation/Navigator";

const App = () => {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
