import React, { useContext } from "react";
import { LocationContext } from "../context/LocationProvider";
import AccordionItem from "../components/accordionItems";
import { Text, StyleSheet, View, FlatList, SafeAreaView } from "react-native";

//Create a WaitList page
const ListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Heading />
        <WeatherList />
      </View>
    </View>
  );
};

function Heading() {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.headingTitle}>Watch List</Text>
      <Text style={styles.description}>Tap a city for more details.</Text>
    </View>
  );
}

function WeatherList() {
  const { watchList } = useContext(LocationContext);

  return (
    <SafeAreaView>
      <FlatList
        data={watchList}
        keyExtractor={(item) => item.location.name}
        renderItem={({ item }) => (
          <AccordionItem
            city={item.location.name}
            condition={item.current.condition.text}
            temp={item.current.temp_c}
            wind={item.current.wind_mph}
            humidity={item.current.humidity}
            precipitation={item.current.precip_mm}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>Your Watchlist is empty.</Text>
        }
      />
    </SafeAreaView>
  );
}

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "navajowhite",
  },
  subContainer: {
    paddingTop: 40,
    paddingHorizontal: 18,
  },
  headingTitle: {
    fontSize: 32,
    fontWeight: "bold",
    paddingBottom: 6,
  },
  description: {
    fontSize: 15,
  },
  headingContainer: {
    paddingBottom: 20,
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: 16,
  },
});
