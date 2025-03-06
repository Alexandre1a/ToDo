import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSettings } from "../context/SettingsContext";

export default function LandingScreen({ onFinish }) {
  const { settings } = useSettings();

  return (
    <View style={[styles.container, { backgroundColor: settings.accentColor }]}>
      <Text style={styles.title}>Welcome to TodoApp</Text>
      <Text style={styles.subtitle}>Customize your experience</Text>

      <TouchableOpacity style={styles.button} onPress={onFinish}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: "white",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 25,
    marginTop: 30,
  },
  buttonText: {
    color: "#5784BA",
    fontSize: 18,
  },
});
