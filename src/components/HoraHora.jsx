import React, { useContext } from "react";
import { CoordinatesContext } from "./Context";
const HoraHora = () => {
  const { weatherInfo } = useContext(CoordinatesContext);

  if (weatherInfo !== "") {
    return (
      <div className="hora-hora d-flex">
        {weatherInfo.hourly.map((i, index) => {
          let date = new Date(i.dt * 1000);
          let nextHour = index % 4 === 0 ? date.getHours() : null;
          let nextTemp = index % 4 === 0 ? i.temp : null;
          let codeIcon = index % 4 === 0 ? i.weather[0].icon : null;
          console.log(nextHour + ":00", nextTemp, index);
          return (
            index % 4 === 0 && (
              <div key={index} className="hora-temp">
                {codeIcon && (
                  <img
                    src={`http://openweathermap.org/img/wn/${codeIcon}@2x.png`}
                    alt="icon"
                    width="50"
                    height="50"
                  />
                )}
                <span className="font-color">
                  {codeIcon && `${nextTemp}°C`}
                </span>
                <span className="font-color">
                  {codeIcon && `${nextHour}:00`}
                </span>
              </div>
            )
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

export default HoraHora;
