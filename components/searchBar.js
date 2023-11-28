import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import React from "react";

//Set a search bar
const SearchBar = (props) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Enter city name here..."
        style={styles.input}
        value={props.searchText}
        onChangeText={(text) => props.setSearchText(text)}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    width: Dimensions.get("screen").width - 20,
    borderWidth: 1.5,
    paddingVertical: 10,
    borderRadius: 25,
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderColor: "grey",
  },
});
