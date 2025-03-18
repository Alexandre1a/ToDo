import * as React from "react";
import { View, Text } from "react-native";
import { styles } from "../constants/Style";
import CustomHeader from "../components/Header";

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
      <View style={styles.globalContainer}>
        <Text style={styles.globalText}>Settings Screen</Text>
        <Text style={styles.globalText}>This is a text</Text>
      </View>
    </View>
  );
}
