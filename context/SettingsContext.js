import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultSettings = {
  theme: "light",
  accentColor: "#5784BA",
  notifications: true,
};

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const storedSettings = await AsyncStorage.getItem("@settings");
      if (storedSettings) setSettings(JSON.parse(storedSettings));
    } catch (e) {
      console.error("Failed to load settings");
    }
  };

  const saveSettings = async (newSettings) => {
    try {
      await AsyncStorage.setItem("@settings", JSON.stringify(newSettings));
      setSettings(newSettings);
    } catch (e) {
      console.error("Failed to save settings");
    }
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => React.useContext(SettingsContext);
