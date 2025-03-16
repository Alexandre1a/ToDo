import React from "react";
import { View, Text } from "react-native";
import CustomHeader from "../components/Header";
import { styles } from "../constants/Style";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
      <View style={styles.globalContainer}>
        <Text>Profile Screen</Text>
        <Text>This tab is under construction.</Text>
      </View>
    </View>
  );
}
