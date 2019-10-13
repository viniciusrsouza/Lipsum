import React, { Component } from "react";
import { Link, animateScroll as scroller } from "react-scroll";
import "./NavBar.css";
import { signout } from "../utils";

class NavBar extends Component {
  state = {};

  onClickLogout(){
    signout(() => {
      window.location.href='/'
    })
  }

  render() {
    let session = this.props.session
    console.log(session)
    const tag = session?
    <p>
      Olá, {`${session}`}
      <button className="btn btn-outline-dark my-sm-0" onClick={this.onClickLogout}>logout</button>
    </p>
    :
    <a className="btn btn-outline-dark my-sm-0" 
        href='/login'>
      Login
    </a>
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" onClick={scroller.scrollToTop()}>
          TAG
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="carousel" label="Início"/>
            </li>
            <li className="nav-item">
              <NavLink to="about" label="Quem somos" />
            </li>
            <li className="nav-item">
              <NavLink to="" label="Notícias" />
            </li>
            <li className="nav-item">
              <NavLink to="projects" label="Projetos"/>
            </li>
            <li className="nav-item">
              <NavLink to="team" label="Equipe"/>
            </li>
            <li className="nav-item">
              <NavLink to="" label="Eventos" />
            </li>
            <li className="nav-item">
              <NavLink to="" label="Contato" />
            </li>
          </ul>
          {tag}
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
class NavLink extends React.Component {
  render() {
    return (
      <Link className="nav-element" to={this.props.to} smooth={true}>
        <a className="nav-link">{this.props.label}</a>
      </Link>
    );
  }
}

export default NavBar;
