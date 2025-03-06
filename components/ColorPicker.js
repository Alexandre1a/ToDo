import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useSettings } from "../context/SettingsContext";

const COLORS = ["#5784BA", "#9C6ADE", "#FF6B6B", "#4ECDC4", "#45B7D1"];

export default function ColorPicker({ selectedColor, onColorSelect }) {
  return (
    <View style={styles.container}>
      {COLORS.map((color) => (
        <TouchableOpacity
          key={color}
          style={[
            styles.colorOption,
            { backgroundColor: color },
            selectedColor === color && styles.selected,
          ]}
          onPress={() => onColorSelect(color)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
  colorOption: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selected: {
    borderColor: "black",
  },
});
