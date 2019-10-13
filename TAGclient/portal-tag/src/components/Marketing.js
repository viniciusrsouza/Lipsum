import React, { Component } from "react";
import "./Marketing.css";
import image from "../images/using-notebook.png";

class Marketing extends Component {
  state = {};
  render() {
    return (
      <div class="container marketing">
        <h1>Projetos</h1>

        <div class="row">
          <div class="col-lg-4">
            <img src={image} class="img-thumbnail"></img>
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                Saiba mais &raquo;
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <img src={image} class="img-thumbnail"></img>
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                Saiba mais &raquo;
              </a>
            </p>
          </div>
          <div class="col-lg-4">
            <img src={image} class="img-thumbnail"></img>
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Etiam porta sem malesuada magna mollis
              euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna.
            </p>
            <p>
              <a class="btn btn-secondary" href="#" role="button">
                Saiba mais &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Marketing;
