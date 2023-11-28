import { useState, useEffect } from "react";
import { API_KEY } from "@env";

const YOUR_API = API_KEY;

//Fetches weather data from the Weather API based on a serach term.
export default function useData(search) {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setWeather(await getData(search));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [search]);

  return {
    loading,
    weather,
    error,
  };
}

const URL = (search) =>
  `http://api.weatherapi.com/v1/current.json?key=${YOUR_API}&q=${search}+&aqi=no`;

async function getData(search) {
  const url = URL(search);
  let res = await fetch(url);
  let data = await res.json();
  return data;
}
