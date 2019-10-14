import React from "react";
import Element from "./Element.js";
import logo from "../../images/logo2.png";
import "./AboutElement.css";

class AboutElement extends Element {
  getChildren() {
    return (
      <div>
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              Quem somos. <span class="text-muted">Saiba mais sobre nós.</span>
            </h2>
            <p class="lead">
              Breve descrição da empresa definida pelo cliente. ex: We're a
              group of passionate software testers in... with an enthusiastic
              drive for technology...
            </p>
          </div>
          <div class="col-md-5">
            <img src={logo} width="100%"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutElement;
