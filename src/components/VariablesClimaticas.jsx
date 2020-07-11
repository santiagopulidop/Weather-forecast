import React, { useState, useContext } from "react";
import { CoordinatesContext } from "./Context.jsx";
const VariablesClimaticas = () => {
  const { weatherInfo, queryWeather } = useContext(CoordinatesContext);

  if (weatherInfo !== "") {
    return (
      <div className="variables bg-light border-top border-bottom pt-3">
        <h6 className="var">
          Wind:{" "}
          <span className="font-weight-normal">
            {weatherInfo.current.wind_speed} <small>m/s</small>{" "}
          </span>
        </h6>
        <h6 className="var">
          Humidity:{" "}
          <span className="font-weight-normal">
            {weatherInfo.current.humidity}%
          </span>
        </h6>
        <h6 className="var">
          Dew Pt:{" "}
          <span className="font-weight-normal">
            {" "}
            {weatherInfo.current.dew_point}°C
          </span>
        </h6>
        <h6 className="var">
          Uv Index:{" "}
          <span className="font-weight-normal">{weatherInfo.current.uvi}</span>
        </h6>
        <h6 className="var">
          Visibility:{" "}
          <span className="font-weight-normal">
            {weatherInfo.current.visibility}mts
          </span>
        </h6>
        <h6 className="var">
          Pressure:{" "}
          <span className="font-weight-normal">
            {weatherInfo.current.pressure}hPa
          </span>
        </h6>
      </div>
    );
  } else {
    return <div>cargando...</div>;
  }
};

export default VariablesClimaticas;
