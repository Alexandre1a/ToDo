import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { useSettings } from "../context/SettingsContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Task from "../components/Task";

export default function MainScreen() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const { settings } = useSettings();

  // Add persistence logic here
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem("@tasks");
      if (storedTasks) setTaskItems(JSON.parse(storedTasks));
    } catch (e) {
      console.error("Failed to load tasks");
    }
  };

  const saveTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem("@tasks", JSON.stringify(tasks));
    } catch (e) {
      console.error("Failed to save tasks");
    }
  };

  const handleAddTask = () => {
    Keyboard.dismiss();
    const newTasks = [...taskItems, task];
    setTaskItems(newTasks);
    saveTasks(newTasks);
    setTask(null);
  };

  const completeTask = (index) => {
    const newTasks = taskItems.filter((_, i) => i !== index);
    setTaskItems(newTasks);
    saveTasks(newTasks);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: settings.theme === "dark" ? "#121212" : "#E8EAED" },
      ]}
    >
      {/* Rest of your original App.js JSX here */}
      {/* Keep all the ScrollView and KeyboardAvoidingView code */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
});
