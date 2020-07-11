import React, { useEffect, useContext } from "react";
import axios from "axios";

import { CoordinatesContext } from "./Context";
const ClimaHoy = () => {
  const {
    latitud,
    longitud,
    queryWeather,
    setWeatherInfo,
    weatherInfo,
  } = useContext(CoordinatesContext);

  useEffect(() => {
    if (queryWeather) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitud}&units=metric&appid=9588234de2b6e8b80bcda45cfc3f4e36`
        )
        .then((res) => {
          setWeatherInfo(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [queryWeather]);

  if (weatherInfo !== "") {
    localStorage.setItem("weatherInfo", JSON.stringify(weatherInfo));
    let codeIcon = weatherInfo.current.weather[0].icon;
    if (queryWeather) {
      localStorage.setItem(
        "City",
        JSON.stringify(document.getElementById("input-city").value)
      );
    }

    return (
      <div className="clima-hoy">
        <div className="media clima-descripcion">
          <img
            src={`http://openweathermap.org/img/wn/${codeIcon}@2x.png`}
            className="align-self-start mr-3 icon"
            alt="icon"
          />
          <div className="media-body variables-clima-hoy">
            <h6 className="mt-0 font-color font-color-b">{`${weatherInfo.current.temp}°C ${weatherInfo.current.weather[0].main}`}</h6>

            <p>
              <i className="font-color-b">
                {" "}
                {weatherInfo.current.weather[0].description}
              </i>
            </p>
            <p>
              <small className="font-color-b">
                <b className="font-color-b">Feels Like: </b>
                {`${weatherInfo.current.feels_like}°C`}
              </small>{" "}
            </p>
          </div>
        </div>
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

export default ClimaHoy;
