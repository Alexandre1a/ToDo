import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Make sure you have expo/vector-icons installed
import { styles } from "../constants/Style";

export default function CustomHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.menuButton}
      >
        <Ionicons name="menu" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
