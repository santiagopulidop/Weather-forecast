import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CoordinatesContext } from "./Context";
import lupa from "../img/buscar.svg";

const NavBar = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const {
    selectedCity,
    setSelectedCity,
    setLatitud,
    setLongitud,
    setQueryWeather,
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
      setQueryWeather(false);
    }
  }, [city]);

  useEffect(() => {
    if (city !== "") {
      document.getElementById("input-city").value = selectedCity.place_name;

      setLatitud(selectedCity.geometry.coordinates[1]);
      setLongitud(selectedCity.geometry.coordinates[0]);
      setQueryWeather(true);
    }
  }, [count]);

  return (
    <nav className="navbar navbar-expand-lg font-color-b bg-light" id="navbar">
      <a className="navbar-brand" href="/">
        Weather Forecast
      </a>

      <div id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0">
          <div className="busqueda position-relative d-flex">
            <input
              className="form-control mr-sm-2 font-color-b"
              id="input-city"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
              autoComplete="off"
            ></input>
            <img
              src={lupa}
              alt="buscar"
              id="lupa-buscar"
              className="font-color-b"
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
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
