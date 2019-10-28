import React from "react";
import "./Login.css";
import LoginCard from "./LoginCard";
import { authenticate } from "../utils";
import { post, endpoints } from "../network/http-methods"

class Login extends React.Component {
  render() {
    return (
      <div class="log">
        <button class="btn btn-outline-primary" onClick={this.goBack}>
          Voltar para o site
        </button>
        <LoginCard onClick={this.onLogin} />
      </div>
    );
  }

  onLogin() {
    const emailElement = document.getElementById("email");
    const passwordElement = document.getElementById("password");
    const email = emailElement.value;
    const password = passwordElement.value;
    post(endpoints.login, {username:email, password:password}, (response) => {
      if(response.token){
        console.log(response)
        authenticate(response.token, () => { window.location.href = "/" })
      }else{ 
        console.log(`failed to read response: ${response}`)
      }
    }, (error) => {
      console.log(`error ${error}`)
    })
  }
}

export default Login;
