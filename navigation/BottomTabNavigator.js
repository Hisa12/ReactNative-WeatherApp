import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import MainScreen from "../screens/Mainscreen";
import ListScreen from "../screens/ListScreen";
import TabBarIcon from "../components/tabBarIcon";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

//Create a bottom tab navigation bar
export default function BottomTabNavigator({ navigation, route }) {
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Weather App"
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="weather-cloudy" />
          ),
        }}
      />
      <BottomTab.Screen
        name="List Page"
        component={ListScreen}
        options={{
          title: "Watch List",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="folder-information-outline" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
