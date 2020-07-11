import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const CoordinatesContext = createContext();
export const CoordinatesProvider = (props) => {
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [selectedCity, setSelectedCity] = useState([]);
  const [queryWeather, setQueryWeather] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState("");
  const [infoMinutos, setInfoMinutos] = useState(false);
  const [defaultCity, setDefaultCity] = useState(
    JSON.parse(localStorage.getItem("City"))
  );
  const [localStorageCity, setLocalStorageCity] = useState(
    JSON.parse(localStorage.getItem("weatherInfo"))
  );

  useEffect(() => {
    if (localStorageCity) {
      document.getElementById("input-city").value = defaultCity;

      setWeatherInfo(localStorageCity);
    } else {
      axios
        .get(
          "https://api.openweathermap.org/data/2.5/onecall?lat=42.751210955&lon=-75.4652471468304&units=metric&appid=9588234de2b6e8b80bcda45cfc3f4e36"
        )
        .then((res) => {
          document.getElementById("input-city").value = "New York City";
          setWeatherInfo(res.data);
          localStorage.setItem(
            "City",
            JSON.stringify(document.getElementById("input-city").value)
          );
        });
    }
  }, []);
  return (
    <CoordinatesContext.Provider
      value={{
        latitud,
        setLatitud,
        longitud,
        setLongitud,
        selectedCity,
        setSelectedCity,
        queryWeather,
        setQueryWeather,
        weatherInfo,
        setWeatherInfo,
        setInfoMinutos,
        infoMinutos,
      }}
    >
      {props.children}
    </CoordinatesContext.Provider>
  );
};
