import React, { useState, createContext } from "react";

export const CoordinatesContext = createContext();
export const CoordinatesProvider = (props) => {
  const [latitud, setLatitud] = useState("");
  const [longitud, setLongitud] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  return (
    <CoordinatesContext.Provider
      value={{
        latitud,
        setLatitud,
        longitud,
        setLongitud,
        selectedCity,
        setSelectedCity,
      }}
    >
      {props.children}
    </CoordinatesContext.Provider>
  );
};
