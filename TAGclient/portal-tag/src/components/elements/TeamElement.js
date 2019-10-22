import React from "react";
import Element from "./Element.js";
import "./TeamElement.css";
import image from "../../images/icon_user.png";

class TeamElement extends Element {
  getChildren() {
    return (
      <div class="container marketing">
        <h1>Equipe</h1>
        <div className="row">
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
        <a class="btn btn-outline-info" href="#" role="button">
          Ver toda a equipe
        </a>
      </div>
    );
  }
}

function TeamCard() {
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

export default TeamElement;
