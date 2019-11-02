import React from "react";
import "./Login.css";
import LoginCard from "./LoginCard";
import { authenticate, validate } from "../utils";
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
    let isValid = true
    isValid = validate(email, emailElement) && isValid
    isValid = validate(password, passwordElement) && isValid
    
    if(isValid){
      post(endpoints.login, {username:email, password:password}, (response) => {
        if(response.token){
          console.log(response)
          authenticate(response.token, email, () => { window.location.href = "/" })
        }else{ 
          console.log(`failed to read response: ${response}`)
          if(response.non_field_errors){
            credentialErrors()
          }
        }
      }, (error) => {
        console.log(`error ${error}`)
      })
    }
  }
}

//TODO alterar o alert para um aviso melhor
function credentialErrors(){
  window.alert("Credenciais inválidas")
}
export default Login;
