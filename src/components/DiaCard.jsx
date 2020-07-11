import React from "react";

const DiaCard = ({
  day,
  minTemp,
  maxTemp,
  icon,
  description,
  pressure,
  humidity,
  windSpeed,
}) => {
  return (
    <div className="card clima-dia">
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        className="card-img-top"
        alt="icon"
      />
      <div className="card-body p-0 pb-4">
        <h5 className="card-title mb-2 font-color font-weight-bold">{day}</h5>
        <p>
          <small className="text-center font-italic w-100 font-color">
            {description}
          </small>
        </p>
        <small className="card-text m-1 badge badge-pill badge-color">
          min: <span className="badge badge-color">{minTemp}</span>
        </small>
        <small className="card-text badge-pill badge badge-color">
          max: <span className="badge badge-color">{maxTemp}</span>
        </small>
        <small className="card-text m-1 badge-pill badge badge-color">
          <span className="badge badge-color" title="Pressure">
            {pressure}hPa
          </span>
        </small>
        <small className="card-text badge-pill m-1 badge badge-color">
          <span className="badge badge-color" title="Humidity">
            {humidity}%
          </span>
        </small>
        <small className="card-text badge-pill mr-1 badge badge-color">
          <span className="badge badge-color" title="Wind Speed">
            {windSpeed}m/s
          </span>
        </small>
      </div>
    </div>
  );
};

export default DiaCard;
