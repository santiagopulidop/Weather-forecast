import React, { useEffect, useContext } from "react";
import axios from "axios";
import { CoordinatesContext } from "./Context";
const ClimaHoy = () => {
  const {
    selectedCity,
    setSelectedCity,
    latitud,
    setLatitud,
    longitud,
    setLongitud,
  } = useContext(CoordinatesContext);

  useEffect(() => {
    console.log(selectedCity.place_name, latitud, longitud);
  });
  return <div className="clima-hoy">Espacio para el clima de hoy</div>;
};

export default ClimaHoy;
