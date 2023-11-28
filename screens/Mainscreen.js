import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  ScrollView,
} from "react-native";
import SearchBar from "../components/searchBar";
import useData from "../components/api";
import { useContext } from "react";
import { LocationContext } from "../context/LocationProvider";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native-gesture-handler";

//Call specific data and display it on Home page
export default function GetInput() {
  const navigation = useNavigation();
  const { addToWatchList, watchList } = useContext(LocationContext);
  const [searchText, setSearchText] = useState("");
  const { loading, weather, error } = useData(searchText);

  let storedItem = watchList.find(
    (obj) =>
      obj.location &&
      obj.location.name &&
      weather.location &&
      weather.location.name &&
      obj.location.name === weather.location.name
  );
  const watchListDisabled = storedItem ? true : false;

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>error...</Text>;
  }
  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.loginButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.push("Log In");
            }}
          >
            <Text style={styles.loginText}>Have an account? Tap to Login.</Text>
          </TouchableOpacity>
        </View>

        <View>
          <SearchBar searchText={searchText} setSearchText={handleSearch} />
        </View>

        {weather.location ? (
          <View>
            <View style={styles.searchLocation}>
              <Text style={styles.title}>{weather.location.name}</Text>
            </View>
            <View style={styles.containerInfo}>
              <View style={styles.extraInfo}>
                <View style={styles.info}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/description.png")}
                  />
                  <Text style={styles.infoText}>Weather:</Text>
                  <Text style={styles.infoAPI}>
                    {weather.current.condition.text}
                  </Text>
                </View>
                <View style={styles.info}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/temperature.png")}
                  />
                  <Text style={styles.infoText}>Temperature:</Text>
                  <Text style={styles.infoAPI}>
                    {weather.current.temp_c} °C
                  </Text>
                </View>
              </View>
              <View style={styles.extraInfo}>
                <View style={styles.info}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/wind.png")}
                  />
                  <Text style={styles.infoText}>Wind Speed:</Text>
                  <Text style={styles.infoAPI}>
                    {weather.current.wind_mph} mph
                  </Text>
                </View>
                <View style={styles.info}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/humidity.png")}
                  />
                  <Text style={styles.infoText}>Humidity:</Text>
                  <Text style={styles.infoAPI}>
                    {weather.current.humidity} %
                  </Text>
                </View>
              </View>
              <View style={styles.extraInfo}>
                <View style={styles.info}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/precipitation.png")}
                  />
                  <Text style={styles.infoText}>Precipitation:</Text>
                  <Text style={styles.infoAPI}>
                    {weather.current.precip_mm} mm
                  </Text>
                </View>
                <View style={styles.info}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/cloud.png")}
                  />
                  <Text style={styles.infoText}>Cloud:</Text>
                  <Text style={styles.infoAPI}>{weather.current.cloud} %</Text>
                </View>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.update}>
                  Last update: {weather.current.last_updated}
                </Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Add to Watch List"
                color="white"
                onPress={() => addToWatchList(weather)}
                disabled={watchListDisabled}
                style={styles.Button}
              />
            </View>
            <View style={styles.errorContainer}>
              {watchListDisabled && (
                <Text style={styles.errorMessage}>
                  This city is already stored in your Watch List.
                </Text>
              )}
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.welcome}>
              Welcome{"\n"}To{"\n"}Weather App
            </Text>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>
                Please enter the location where you are interested in checking
                the today's.
              </Text>
              <Image
                style={styles.mainIcon}
                source={require("../assets/weather.png")}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "navajowhite",
  },

  title: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "700",
    color: "black",
  },
  extraInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 7,
  },
  info: {
    width: Dimensions.get("screen").width / 2.5,
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  infoText: {
    textAlign: "center",
    fontSize: 16,
  },
  infoAPI: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  containerInfo: {
    backgroundColor: "white",
    borderRadius: 15,
    margin: 20,
  },
  update: {
    margin: 5,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    marginLeft: 50,
  },
  welcome: {
    width: "100%",
    textAlign: "center",
    fontSize: 40,
    fontWeight: "700",
    color: "black",
    marginTop: 10,
  },
  welcomeContainer: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 5,
    height: 200,
    marginTop: 15,
    justifyContent: "center",
  },
  welcomeText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  mainIcon: {
    marginTop: 18,
    height: 100,
    width: 100,
    marginLeft: 120,
  },
  buttonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "orange",
    width: "60%",
    alignSelf: "center",
    paddingBottom: 10,
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "orange",
    width: "100%",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  searchLocation: {
    alignItems: "center",
    padding: 5,
  },
  errorContainer: {
    padding: 10,
  },
  errorMessage: {
    textAlign: "center",
    color: "red",
  },
  watchlistButton: {
    fontWeight: "bold",
  },
});
