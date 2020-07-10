import React, { useState, createContext } from "react";

export const CoordinatesContext = createContext();
export const CoordinatesProvider = (props) => {
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [queryWeather, setQueryWeather] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState("");

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
      }}
    >
      {props.children}
    </CoordinatesContext.Provider>
  );
};
