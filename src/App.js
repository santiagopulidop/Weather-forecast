import React from "react";
import "./App.scss";
import { CoordinatesProvider } from "./components/Context";
import NavBar from "./components/NavBar.jsx";
import VariablesClimaticas from "./components/VariablesClimaticas.jsx";
import ClimaHoy from "./components/ClimaHoy";
import HoraHora from "./components/HoraHora";
import DiaDia from "./components/DiaDia";

function App() {
  return (
    <CoordinatesProvider>
      <div className="App">
        <NavBar />
        <VariablesClimaticas />
        <ClimaHoy />
        <HoraHora />
        <DiaDia />
      </div>
    </CoordinatesProvider>
  );
}

export default App;
