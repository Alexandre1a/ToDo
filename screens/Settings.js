import * as React from "react";
import { View, Text } from "react-native";
import { styles } from "../constants/Style";

export default function SettingsScreen() {
  return (
    <View style={styles.globalContainer}>
      <Text style={styles.globalText}>Settings Screen</Text>
    </View>
  );
}
