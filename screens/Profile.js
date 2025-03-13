import * as React from "react";
import { View, Text } from "react-native";
import { styles } from "../constants/Style";

export default function ProfileScreen() {
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.profileText}>Profile Screen </Text>
    </View>
  );
}
