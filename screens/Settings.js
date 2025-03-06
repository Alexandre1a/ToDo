import { View, Text, Switch, StyleSheet } from "react-native";
import { useSettings } from "../context/SettingsContext";
import ColorPicker from "../components/ColorPicker";

export default function SettingsScreen() {
  const { settings, saveSettings } = useSettings();

  const handleColorChange = (color) => {
    saveSettings({ ...settings, accentColor: color });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.settingItem}>
        <Text>Dark Mode</Text>
        <Switch
          value={settings.theme === "dark"}
          onValueChange={(val) =>
            saveSettings({
              ...settings,
              theme: val ? "dark" : "light",
            })
          }
        />
      </View>

      <View style={styles.settingItem}>
        <Text>Accent Color</Text>
        <ColorPicker
          selectedColor={settings.accentColor}
          onColorSelect={handleColorChange}
        />
      </View>

      <View style={styles.settingItem}>
        <Text>Enable Notifications</Text>
        <Switch
          value={settings.notifications}
          onValueChange={(val) =>
            saveSettings({ ...settings, notifications: val })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
});
