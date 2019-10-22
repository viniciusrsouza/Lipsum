import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import Carousel from "./components/Carousel.js";
import News from "./components/News.js";
import Element from "./components/elements/Element";
import AboutElement from "./components/elements/AboutElement.js";
import ProjectElement from "./components/elements/ProjectsElement";
import TeamElement from "./components/elements/TeamElement";
import EventElement from "./components/elements/EventElement";
import ContactElement from "./components/elements/ContactElement";

function App() {
  let session = localStorage.getItem("session-id");
  return (
    <div className="App">
      <Body session={session} />
    </div>
  );
}

/**
 * Elementos deverão ser inseridos aqui
 * dentro de tags <Element> passando seu label
 * para funcionarem com o smooth scroll
 */
function Body(props) {
  return (
    <div className="Body">
      <NavBar session={props.session} />
      <Element id="news">
        <News />
      </Element>
      <hr class="featurette-divider"></hr>
      <main>
        <Element id="about">
          <AboutElement />
        </Element>
        <hr class="featurette-divider"></hr>
        <Element id="events">
          <EventElement />
        </Element>
        <hr class="featurette-divider"></hr>
        <Element id="projects">
          <ProjectElement />
        </Element>
        <hr class="featurette-divider"></hr>
        <Element id="team">
          <TeamElement />
        </Element>
        <hr class="featurette-divider"></hr>
        <Element id="contact">
          <ContactElement />
        </Element>
        <hr class="featurette-divider"></hr>
      </main>
    </div>
  );
}

export default App;
