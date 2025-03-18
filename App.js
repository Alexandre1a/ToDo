import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TasksScreen from "./screens/Task";
import ProfileScreen from "./screens/Profile";
import SettingsScreen from "./screens/Settings";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: "left",
        drawerType: "front", // Ensures drawer appears over content
        drawerStyle: {
          width: 240, // Set drawer width
        },
      }}
    >
      <Drawer.Screen name="Tasks" component={TasksScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
