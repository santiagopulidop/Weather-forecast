import React, { useContext } from "react";
import { CoordinatesContext } from "./Context";
const HoraHora = () => {
  const { weatherInfo } = useContext(CoordinatesContext);

  if (weatherInfo !== "") {
    /* let codeIcon = weatherInfo.hourly.weather[0].icon; */
    return (
      <div className="hora-hora d-flex">
        {weatherInfo.hourly.map((i, index) => {
          let date = new Date(i.dt * 1000);
          let nextHour = index % 4 === 0 ? date.getHours() : null;
          let nextTemp = index % 4 === 0 ? i.temp : null;
          let codeIcon = index % 4 === 0 ? i.weather[0].icon : null;

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
                <span>
                  {nextHour && nextTemp && codeIcon && `${nextTemp}°C`}
                </span>
                <span></span>
                {nextHour && nextTemp && codeIcon && `${nextHour}:00`}
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
