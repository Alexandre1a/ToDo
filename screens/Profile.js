import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.profileContainer}>
      <Text style={styles.profileText}>Profile Screen </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileText: {
    fontSize: 16,
    fontWeight: "700",
  },
});
