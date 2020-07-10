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
          return (
            <div key={index} className="p-1 hora-temp">
              {nextHour && nextTemp && `${nextTemp}°C  ${nextHour}h`}
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>cargando...</div>;
  }
};

export default HoraHora;
