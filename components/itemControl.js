import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { LocationContext } from "../context/LocationProvider";

//Set remove function in the WatchList (not working)
export const ItemControl = ({ item }) => {
  const { removeFromWatchList } = useContext(LocationContext);
  const handleRemover = () => {
    if (item && item.location && item.location.name) {
      removeFromWatchList(item.location.name);
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={handleRemover}>
        <AntDesign name="closecircle" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};
