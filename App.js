import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TasksScreen from "./screens/Task";
import ProfileScreen from "./screens/Profile";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // This hides the default header
        drawerPosition: "left", // Drawer opens from left side
      }}
    >
      <Drawer.Screen name="Tasks" component={TasksScreen} />
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
