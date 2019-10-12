import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Carousel from "./components/Carousel.js";
import Element from "./components/elements/Element";
import AboutElement from "./components/elements/AboutElement.js";
import QuemSomos from "./components/QuemSomos";

function App() {
  return (
    <div className="App">
      <Body />
    </div>
  );
}

/**
 * Elementos deverão ser inseridos aqui
 * dentro de tags <Element> passando seu label
 * para funcionarem com o smooth scroll
 */
function Body() {
  return (
    <div>
      <NavBar />
      <Element id="carousel">
        <Carousel />
      </Element>
      <Element id="quemsomos">
        <QuemSomos />
      </Element>
      <Element id="about">
        <AboutElement />
      </Element>
    </div>
  );
}

export default App;
