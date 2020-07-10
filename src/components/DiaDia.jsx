import React, { useContext } from "react";
import { CoordinatesContext } from "./Context";
const DiaDia = () => {
  const dias = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const { weatherInfo } = useContext(CoordinatesContext);
  if (weatherInfo !== "") {
    return (
      <div className="dia-dia">
        {weatherInfo.daily.map((i, index) => {
          let date = new Date(i.dt * 1000);
          let day = dias[date.getDay()];
          let dayMinTemp = `${i.temp.min}°C`;
          let dayMaxTemp = `${i.temp.max}°C`;
          return (
            <div key={index}>
              <span>{dayMinTemp}</span>
              <span className="p-3">{day}</span>
              <span>{dayMaxTemp}</span>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>Cargando...</div>;
  }
};

export default DiaDia;
