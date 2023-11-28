import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";

//Set an icon at the tab navigation bar
export default function TabBarIcon(props) {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? "#191970" : "#ccc"}
    />
  );
}
