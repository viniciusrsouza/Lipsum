import React from "react";
import "./GenRegister.css";
import logo from "../images/logo2.png";
import AdminComponent from "./AdminComponent";

class GenRegister extends AdminComponent {
  onClickGenRegister() {}
  render() {
    return (
      <div>
        <GenRegisterCard onClick={this.onClickGenRegister} />
      </div>
    );
  }
}

class GenRegisterCard extends React.Component {
  render() {
    return (
      <div class="text-center">
        <form class="formContent">
          <img
            class="mb-4 img-fluid"
            src={logo}
            alt=""
            width="148"
            height="148"
          ></img>
          <h1 class="h3 mb-3 font-weigth-normal">Cadastrar usuário</h1>
          <label for="inputEmail" class="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="email"
            class="form-control"
            placeholder="Email"
            required
            autofocus
          ></input>
          <button
            class="btn btn-lg btn-primary btn-block"
            type="button"
            value="Log in"
            onClick={this.props.onClick}
          >
            Enviar
          </button>
        </form>
      </div>
    );
  }
}

export default GenRegister;

{
  /* <div className="wrapper">
        <div id="formContent">
          <form>
            <img class="mb-4" src={image} alt="" width="72" height="72"></img>
            <input
              type="text"
              id="name"
              className="login-form second"
              name="email"
              placeholder="email"
            />
            <input
              type="button"
              className="login-button fourth"
              value="Send register link"
              onClick={this.props.onClick}
            />
          </form>
        </div>
      </div> */
}
