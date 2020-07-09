import React, { useState } from "react";

const VariablesClimaticas = () => {
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [dewPt, setDewPt] = useState(0);
  const [uvIndex, setUvIndex] = useState(0);
  const [visibility, setVisibility] = useState(0);
  const [pressure, setPressure] = useState(0);

  return (
    <div className="variables bg-light border-top border-bottom pt-3">
      <h6 className="font-weight-bold">Wind:{wind}</h6>
      <h6 className="font-weight-bold">Humidity:{humidity}</h6>
      <h6 className="font-weight-bold">Dew Pt: {dewPt}</h6>
      <h6 className="font-weight-bold">Uv Index: {uvIndex}</h6>
      <h6 className="font-weight-bold">Visibility: {visibility}</h6>
      <h6 className="font-weight-bold">Pressure: {pressure}</h6>
    </div>
  );
};

export default VariablesClimaticas;
