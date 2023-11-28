import React, { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  watchList: [],
};
AsyncStorage.getItem("watchList")
  .then((watchList) => {
    if (watchList) {
      initialState.watchList = JSON.parse(watchList);
    }
  })
  .catch((error) => {
    console.log(
      "Error occurred while retrieving watchlist from AsyncStorage.",
      error
    );
  });

//set up a context
export const LocationContext = createContext(initialState);

//Set up a provider component
export const LocationProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addToWatchList = (item) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payLoad: item });
  };
  useEffect(() => {
    AsyncStorage.setItem("watchList", JSON.stringify(state.watchList));
  }, [state]);

  const removeFromWatchList = (item) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payLoad: item });
  };

  return (
    <LocationContext.Provider
      value={{
        watchList: state.watchList,
        addToWatchList,
        removeFromWatchList,
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
};
