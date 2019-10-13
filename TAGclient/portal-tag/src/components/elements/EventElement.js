import React, { Component } from "react";
import image from "../../images/using-notebook.png";
import "./EventElement.css";

class EventElement extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="row featurette">
          <div class="col-md-5">
            <img src={image} width="100%"></img>
          </div>
          <div class="col-md-7">
            <h2 class="featurette-heading">
              Eventos.{" "}
              <span class="text-muted">Saiba sobre nossas participações.</span>
            </h2>
            <p class="lead">
              Breve descrição da empresa definida pelo cliente. ex: We're a
              group of passionate software testers in... with an enthusiastic
              drive for technology...
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default EventElement;
