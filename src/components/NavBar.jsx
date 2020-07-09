import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CoordinatesContext } from "./Context";

const NavBar = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const {
    selectedCity,
    setSelectedCity,
    latitud,
    setLatitud,
    longitud,
    setLongitud,
  } = useContext(CoordinatesContext);

  //Evitar Submit al presionar enter
  document.onkeydown = function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  //Al presionar boton buscar se acutaliza el estado con el nombre de la ciudad
  const handleClick = () => {
    setCity(document.getElementById("input-city").value);
  };

  const handleChange = (e) => {
    setCity(e.target.value);
    document.getElementById("resultados").style.display = "inline";
  };
  const handleCityItemClick = (e) => {
    setSelectedCity(data[e.target.id]);
    setCount(count + 1);
    document.getElementById("resultados").style.display = "none";
  };

  //Llamado a la api de coordenadas
  useEffect(() => {
    if (city !== "") {
      axios
        .get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1Ijoic2FudGlhZ29wdWxpZG9wIiwiYSI6ImNrY2U0dTg4ZDA0eHkzM3A4Ym0wMmkxYmkifQ.M_YrQYRSkhhqojyBNJ464g`
        )
        .then((res) => {
          setData(res.data.features);
        });
    } else {
      setData([]);
      setSelectedCity([]);
      setLatitud("");
      setLongitud("");
    }
  }, [city]);

  useEffect(() => {
    if (city !== "") {
      document.getElementById("input-city").value = selectedCity.place_name;
      setLatitud(selectedCity.geometry.coordinates[1]);
      setLongitud(selectedCity.geometry.coordinates[0]);
    }
  }, [count]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <a className="navbar-brand" href="/">
        Weather Forecast
      </a>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <div
        /* className="collapse navbar-collapse" */ id="navbarSupportedContent"
      >
        <form className="form-inline my-2 my-lg-0">
          <div className="busqueda position-relative d-flex">
            <input
              className="form-control mr-sm-2"
              id="input-city"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
              autoComplete="off"
            />
            <div id="resultados" className="list-group-flush">
              {data.map((i, index) => {
                return (
                  <div
                    key={index}
                    id={index}
                    className="list-group-item city-item"
                    onClick={handleCityItemClick}
                  >
                    {i.place_name}
                  </div>
                );
              })}
            </div>
          </div>
          <button
            type="button"
            className="btn btn-outline-info my-2 my-sm-0"
            onClick={handleClick}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
