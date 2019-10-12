import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          TAG
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Início <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Quem somos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Notícias
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Projetos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
