import React from "react";
import Element from "./Element.js";
import "./ProjectsElement.css";
import image from "../../images/using-notebook.png";

class ProjectElement extends Element {
  getChildren() {
    return (
      <div class="container marketing">
        <h1>Projetos</h1>
        <div className="row">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <a class="btn btn-info" href="#" role="button">
          Ver mais projetos
        </a>

        <hr class="featurette-divider"></hr>
      </div>
    );
  }
}

function ProjectCard() {
  return (
    <div class="col-lg-4">
      <img src={image} class="img-thumbnail"></img>
      <h2>Heading</h2>
      <p>
        Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
        Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus,
        porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus
        magna.
      </p>
      <p>
        <a class="btn btn-secondary" href="#" role="button">
          Saiba mais &raquo;
        </a>
      </p>
    </div>
  );
}

export default ProjectElement;
