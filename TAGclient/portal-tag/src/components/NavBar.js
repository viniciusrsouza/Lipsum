import React, { Component } from "react";
import {Link, animatedScroll as scroller} from 'react-scroll'
import './NavBar.css'

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
              <NavLink to="" label="Início"/>
            </li>
            <li class="nav-item">
              <NavLink to="about" label="Quem somos"/>
            </li>
            <li class="nav-item">
              <NavLink to="" label="Notícias"/>
            </li>
            <li class="nav-item">
              <NavLink to="" label="Projetos"/>
            </li>
            <li class="nav-item">
              <NavLink to="" label="Contato"/>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

/**
 * Ao criar um NavLink é necessário especificar
 * o 'to' e o 'label', que serão utilizados para
 * direcionar o smooth scrolling e definir o texto
 * a ser exibido, respectivamente.
 */
class NavLink extends React.Component{
  render(){
    return(
      <Link class="nav-element" to={this.props.to} smooth={true}>
        <a class="nav-link">{this.props.label}</a>
      </Link>
    )
  }
}

export default NavBar;
