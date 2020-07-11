import React, { useContext } from "react";
import { CoordinatesContext } from "./Context";
import DiaCard from "./DiaCard";
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
          let codeIcon = i.weather[0].icon;
          let description = i.weather[0].description;
          let pressure = i.pressure;
          let humidity = i.humidity;
          let windSpeed = i.wind_speed;
          return (
            <DiaCard
              key={index}
              day={day}
              minTemp={dayMinTemp}
              maxTemp={dayMaxTemp}
              icon={codeIcon}
              description={description}
              pressure={pressure}
              humidity={humidity}
              windSpeed={windSpeed}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="spinner-grow text-center" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
};

export default DiaDia;
