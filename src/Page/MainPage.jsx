import React from "react";
import { CoordinatesProvider } from "../components/Context";
import NavBar from "../components/NavBar.jsx";
import VariablesClimaticas from "../components/VariablesClimaticas.jsx";
import ClimaHoy from "../components/ClimaHoy";
import HoraHora from "../components/HoraHora";
import DiaDia from "../components/DiaDia";
import Footer from "../components/Footer";
function MainPage() {
  return (
    <CoordinatesProvider>
      <NavBar />
      <VariablesClimaticas />
      <ClimaHoy />
      <HoraHora />
      <DiaDia />
      <Footer />
    </CoordinatesProvider>
  );
}

export default MainPage;
