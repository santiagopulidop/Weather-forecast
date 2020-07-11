import React, { useContext } from "react";
import GraficaMinuto from "./GraficaMinuto";
import { CoordinatesContext } from "./Context.jsx";

const MinutoMinuto = () => {
  const { infoMinutos } = useContext(CoordinatesContext);
  console.log(infoMinutos);
  if (infoMinutos) {
    let labels = [];
    for (let i = 0; i < 60; i++) {
      labels.push(i);
    }
    let data = [];
    infoMinutos.forEach((i) => {
      data.push(i.precipitation);
    });
    return (
      <div>
        <GraficaMinuto labels={labels} data={data} />
      </div>
    );
  } else {
    return <div style={{ display: "none" }}>...</div>;
  }
};

export default MinutoMinuto;
