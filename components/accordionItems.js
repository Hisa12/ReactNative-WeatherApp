import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { ItemControl } from "./itemControl";

//Create an accordion card to display in the WatchList.
const AccordionItem = (item) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={() => setShowContent(!showContent)}>
          <View style={styles.textContainer}>
            <Text style={styles.firstMainItem}>{item.city}</Text>
            <Text style={styles.secondMainItem}>{item.condition}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.thirdMainItem}>
          <ItemControl item={item} />
        </View>
      </View>

      {showContent && (
        <View>
          <View style={styles.subContainer}>
            <Text style={styles.firstItem}> {item.temp}°C</Text>
            <Text style={styles.thirdItem}> {item.wind}mph</Text>
            <Text style={styles.fourthItem}> {item.humidity}%</Text>
            <Text style={styles.secondItem}> {item.precipitation}mm</Text>
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.firstItem}>Temp</Text>
            <Text style={styles.secondItem}>Wind</Text>
            <Text style={styles.thirdItem}>Humid</Text>
            <Text style={styles.fourthItem}>Precipi</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    justifyContent: "space-evenly",
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
  },
  firstMainItem: {
    width: "55%",
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 700,
  },
  secondMainItem: {
    width: "30%",
    paddingLeft: 10,
    fontSize: 18,
  },
  thirdMainItem: {
    width: "15%",
    paddingLeft: 10,
    fontSize: 20,
  },
  firstItem: {
    width: "25%",
    paddingLeft: 10,
    fontSize: 15,
  },
  secondItem: {
    width: "25%",
    paddingLeft: 15,
    fontSize: 15,
  },
  thirdItem: {
    width: "25%",
    paddingLeft: 15,
    fontSize: 15,
  },
  fourthItem: {
    width: "25%",
    paddingLeft: 15,
    fontSize: 15,
  },
  textContainer: {
    flexDirection: "row",
    height: 60,
    alignItems: "center",
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 30,
  },
});

export default AccordionItem;
