import React from "react";
import "./LoginCard.css";
import image from "../images/icon_user.png";

class LoginCard extends React.Component {
  render() {
    return (
      <div class="text-center">
        <form class="form-signin">
          <img class="mb-4" src={image} alt="" width="72" height="72"></img>
          <h1 class="h3 mb-3 font-weigth-normal">
            Por favor, preencha os campos abaixo
          </h1>
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
          <label for="inputPassword" class="sr-only">
            Password
          </label>
          <input
            for="inputPassword"
            id="password"
            type="password"
            class="form-control"
            placeholder="Senha"
            required
          ></input>
          <p class="mt-3 mb-3 text-muted">
            <a href="#">Esqueci minha senha</a>
          </p>
          <button
            class="btn btn-lg btn-primary btn-block"
            type="button"
            value="Log in"
            onClick={this.props.onClick}
          >
            Logar
          </button>
        </form>
      </div>
    );
  }
}
export default LoginCard;

{
  /* <div class="wrapper">
                <div id="formContent">
                    <div class="first">
                    <img src={image} id="icon" alt="User Icon" />
                    </div>
                    <form>
                    <input type="email" id="email" class="login-form second" name="email" placeholder="email"/>
                    <input type="password" id="password" class="login-form third" name="password" placeholder="password"/>
                    <input type="button" class="login-button fourth" value="Log In" onClick={this.props.onClick}/>
                    </form>
                    <div id="formFooter">
                    <a class="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
            </div> */
}
